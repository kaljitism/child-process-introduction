const {spawn, exec} = require('node:child_process');

// To set an environment variable, we do -
// >> export FOO='bar'
// To use them we refer them as process.env.FOO
// To delete them, we execute - >> unset FOO

// ---------- Environment Variables ---------- //

console.log(`PATH: ${process.env.PATH}`);
console.log(`ARGUMENTS: ${process.argv}`);
console.log(`Process ID: ${process.pid}`);
console.log(`Parent Process ID: ${process.ppid}`);
console.log(`Environment Variables: ${process.env}`);
console.log(`Present Working Directory : ${process.env.PWD}`);

// ---------- Child Processes ---------- //

const subprocess = spawn(
    'zsh',
    ['./scripts.sh'],
    );

subprocess.stdout.on('data', chunk => {
  console.log(chunk.toString());
});

subprocess.on('error', error => {
  console.log(`Error: ${error}`);
});

exec('echo "something string" | tr " " "\n"', {
  shell:'/usr/share/bash'
}, (error, stdout, stderr) => {
  if (stderr) console.log(stderr);
  if (stdout) console.log(stdout);
  console.log('Welcome in ther shelll');
});


// ---------- C Child Process ---------- //

const cProcess = spawn('./playground',
    ["some string",
      "-f",
      "34",
      "some",
      " more string",
      "somethinggg",],
    {
      // Default Option is> env: process.env
      // We can pass our environment variables like this -
      env: {MODE: "development"},
    },
    );

cProcess.stdout.on('data', chunk => {
  console.log(chunk.toString());
});

cProcess.on('error', error => {
  console.log(`Error: ${error}`);
});
