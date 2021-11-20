const path = require('path');
const fs = require('fs');
const exec = require('util').promisify(require('child_process').exec);

async function run() {
  const rootDir = path.resolve(__dirname, '../');
  const babelConfigPath = path.resolve(rootDir, './scripts/babel.config.js');
  const sourceDir = path.resolve(rootDir, './src');
  const outputDir = path.resolve(rootDir, './cns-ui');

  const command = [
    'yarn babel',
    '--config-file',
    babelConfigPath,
    '--extensions',
    '".js,.ts,.tsx"',
    sourceDir,
    '--out-dir',
    outputDir,
    '--ignore',
    '"**/*.test.js","**/*.stories.tsx","**/*.d.ts"',
  ].join(' ');

  await exec(command);
  fs.copyFileSync(path.join(rootDir, 'meta.json'), path.join(outputDir, 'meta.json'));
}

run();
