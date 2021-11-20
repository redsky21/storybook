'use strict';

const chalk = require('chalk');
const prompts = require('prompts');
const cliProgress = require('cli-progress');
const fs = require('fs');
const path = require('path');
const { delay, installDeps, updateEslintRules } = require('./helpers');
const { exec } = require('child_process');
const execAsync = require('util').promisify(exec);
const rootPath = path.join(__dirname, '../../');
const uiPackagePath = path.join(__dirname, '../ui');

async function cleanup(targetPath) {
  const isFolderExist = fs.existsSync(path.join(targetPath, 'src/cns-ui'));
  if (isFolderExist) {
    fs.rmdirSync(path.join(targetPath, 'src/cns-ui'), { recursive: true });
  }
}

async function install(targetPath) {
  const zipFileName = 'cns-ui.tar.gz';

  /** UI 빌드파일을 압축 후 타겟 폴더에 복사한 후 삭제 */
  await execAsync(`cd ../ui && tar -zcvf ${zipFileName} cns-ui`);
  fs.copyFileSync(path.join(uiPackagePath, zipFileName), path.join(targetPath, zipFileName));
  await execAsync(`cd ${targetPath} && tar -xvzf ${zipFileName} -C ./src`);

  // 압축파일 삭제
  fs.unlinkSync(path.join(uiPackagePath, zipFileName));
  fs.unlinkSync(path.join(targetPath, zipFileName));

  await updateEslintRules(targetPath);
}

const DIVIDER = '\n--------------------------------------------------\n';
async function init() {
  try {
    console.log(DIVIDER);
    console.log(`${chalk.bold.red('LGCNS React UI컴포넌트 패키지에 대한 설치를 진행합니다.')}`);
    // console.log(
    //   `${chalk.bold.cyan('파일을 읽고 쓰는 과정이 포함되니, 신중하게 진행하여 주십시오.')}`,
    // );
    console.log(DIVIDER);

    /**
     *  진행 여부를 확인한다.
     */
    const { areYouGoingOn } = await prompts({
      type: 'confirm',
      name: 'areYouGoingOn',
      message: '설치를 진행하시겠습니까?\n',
      initial: false,
    });
    if (!areYouGoingOn) {
      throw -1;
    }

    /**
     * 경로를 올바르게 입력하였는지 확인한다.
     */
    console.log(`\n${chalk.bold('React app이 설치된 경로를 입력해주세요.')}`);
    console.log(`(현재 경로(${chalk.blue(rootPath)})를 기준으로, 상대 경로를 입력해야 합니다.)`);
    console.log(`(예: ../../my-project)`);
    const { inputPath } = await prompts({
      type: 'text',
      name: 'inputPath',
      message: '',
      initial: '',
    });
    if (inputPath === '') {
      throw new Error('경로 입력은 필수입니다.');
    }
    const installPath = path.join(rootPath, inputPath);
    let targetDir;
    try {
      targetDir = fs.readdirSync(installPath);
    } catch (err) {
      throw new Error('경로가 제대로 입력되었는지 확인해주세요.');
    }

    /**
     * 리액트 앱이 설치된 경로가 맞는지 확인한다.
     */
    if (targetDir.filter((name) => ['package.json', 'src'].includes(name)).length !== 2) {
      throw new Error(
        'React App이 설치된 경로가 맞는지 확인해주세요. (package.json 파일과 src 폴더가 확인되지 않습니다.)',
      );
    }

    /**
     * 지정한 경로에 메타 파일이 존재하는지 확인 후 (설치된 이력이 있는 경우), 메타 파일 정보를 대조한다.
     * 만약 기존에 설치된 버전이 더 높거나 같을 시, 중단하고, 이에 해당하지 않더라도 업데이트 진행 여부를 다시 한번 확인한다.
     *
     * 기존에 설치된 적이 없거나, 위에서 업데이트 진행을 응답했을 때 새로 빌드 & 복사한다.
     */
    if (fs.existsSync(path.join(installPath, 'src/cns-ui/meta.json'))) {
      const thisMeta = require(path.join(rootPath, '/packages/ui/meta.json'));
      const targetMeta = require(path.join(installPath, 'src/cns-ui/meta.json'));
      console.log(
        `\n기존 버전은 ${chalk.cyan(targetMeta.version)}, 설치 버전은 ${chalk.cyan(
          thisMeta.version,
        )}입니다`,
      );

      const existingVersion = targetMeta.version
        .split('.')
        .reduce((cur, member, idx) => cur + Number(member) * Math.pow(10, 6 - idx * 2), 0);
      const newVersion = thisMeta.version
        .split('.')
        .reduce((cur, member, idx) => cur + Number(member) * Math.pow(10, 6 - idx * 2), 0);

      if (existingVersion >= newVersion) {
        const { doYouOverride } = await prompts({
          type: 'confirm',
          name: 'doYouOverride',
          message: '이미 최신버전이 설치되어있습니다. 무시하고 진행하시겠습니까?\n',
          initial: false,
        });
        if (!doYouOverride) {
          throw -1;
        }
      }
    }

    /**
     * 설치 경로의 워킹트리가 클린한지 확인한다음 진행해준다.
     */
    const gitStatus = await execAsync(`cd ${installPath} && git status`);
    const isWorkingTreeClean = gitStatus.stdout.match('working tree clean');
    if (!isWorkingTreeClean) {
      console.log(DIVIDER);
      console.log(
        `설치 경로에 저장되지 않은 데이터가 존재합니다.\n모든 데이터를 저장된 상태로 두는 것을 권장합니다. (${chalk.bold(
          'stash',
        )} or ${chalk.bold('commit')})`,
      );
      console.log(DIVIDER);
      const { goPlease } = await prompts({
        type: 'confirm',
        name: 'goPlease',
        message: '무시하고 진행하시겠습니까?\n',
        initial: false,
      });
      if (!goPlease) {
        throw -1;
      }
    }

    console.log('\n설치를 시작합니다.');

    await installDeps(installPath);
    const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

    const totalValue = 1463;
    progressBar.start(totalValue, 0); // (total, initialValue)
    let value = 0;
    const timer = setInterval(() => {
      value++;
      progressBar.update(value);
      if (value >= progressBar.getTotal()) {
        clearInterval(timer);
        progressBar.stop();
        console.log(`${chalk.bold.blue('>>> 패키지 설치가 완료되었습니다.')}\n`);
        process.exit();
      }
    }, 50);

    await execAsync('cd ../ui && yarn build');
    value = incrementGentle(value, totalValue);

    await cleanup(installPath);
    value = incrementGentle(value, totalValue);

    await install(installPath);
    value = incrementGentle(value, totalValue);

    await delay(1250);
    if (totalValue - value > 100) {
      value = totalValue - 1;
    }
  } catch (err) {
    if (err?.message) {
      console.log(`\n${chalk.bold.red(`>>> Error! ${err.message}`)}`);
      console.log(`>>> ${chalk.gray('문의: 010-4933-0657 김문선')}\n`);
    }
    process.exit();
  }
}

function incrementGentle(current, total) {
  return current + Math.floor((total - current) / 5);
}

init();
