exports.delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 디펜던시 설치
const { exec } = require('child_process');
exports.installDeps = (installPath) => {
  return new Promise((resolve, reject) => {
    const process = exec(
      `cd ${installPath} && yarn add deepmerge@^4.2.2 rsuite@5.0.0-beta.6 react-toast-notifications@2.5.1 @mui/material@^5.0.4 @mui/icons-material@^5.0.4 @mui/styles@^5.0.1 @mui/lab@^5.0.0-alpha.51 date-fns@2.24.0 @emotion/styled@^11.3.0 @emotion/react@^11.5.0 nanoid@3.1.23 @react-spring/web@9.2.4`,
    );

    if (process.error) {
      reject(v);
    }

    process.stdout.on('data', (data) => {
      console.log(data.toString());
    });

    process.stderr.on('data', (data) => {
      console.log(data.toString());
    });

    process.stdout.on('end', () => {
      resolve();
    });
  });
};

const fs = require('fs');
const path = require('path');
// package.json 내의 eslint 룰을 업데이트하는 함수
exports.updateEslintRules = (installPath) =>
  new Promise((resolve, reject) => {
    try {
      const packageJsonPath = path.join(installPath, './package.json');
      //   const newPackageJsonPath = path.join(installPath, './new_package.json');

      const data = fs.readFileSync(packageJsonPath);
      const newPackageJson = JSON.parse(data);
      const eslintRules = {
        'no-func-assign': 'off',
        'no-mixed-operators': 'off',
        'no-loop-func': 'off',
      };
      if (newPackageJson.eslintConfig?.rules) {
        newPackageJson.eslintConfig.rules = {
          ...newPackageJson.eslintConfig.rules,
          ...eslintRules,
        };
      } else {
        newPackageJson.eslintConfig = {
          extends: ['react-app', 'react-app/jest'],
          ...eslintRules,
        };
      }

      fs.writeFileSync(packageJsonPath, JSON.stringify(newPackageJson, null, 2));
      resolve();
    } catch (err) {
      reject(err);
    }
  });
