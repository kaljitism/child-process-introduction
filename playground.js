const {spawn, exec} = require('node:child_process');

const subprocess = spawn('zsh', ['./scripts.sh']);

subprocess.stdout.on('data', chunk => {
  console.log(chunk.toString());
});

subprocess.on('error', error => {
  console.log(`Error: ${error}`);
});

// console.log(process.env.PATH);

exec('echo "something string" | tr " " "\n"', {
  shell:'/usr/share/bash'
}, (error, stdout, stderr) => {
  if (stderr) console.log(stderr);
  if (stdout) console.log(stdout);
  console.log('Welcome in ther shelll');
});
