'use strict';

const { exec, spawn } = require('child_process');
const execAsync = require('util').promisify(exec);

function test() {
  exec('yarn', (__, stdout) => {
    console.log(stdout);
  });
}

test();
