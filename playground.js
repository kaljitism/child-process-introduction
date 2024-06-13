const {spawn, exec} = require('node:child_process');

const subprocess = spawn('echo', ["something string", '|', 'tr', " ", "\n"]);

subprocess.stdout.on('data', chunk => {
  console.log(chunk.toString());
});

subprocess.on('error', error => {
  console.log(`Error: ${error}`);
});

exec('echo "something string" | tr " " "\n"', (error, stdout, stderr) => {
  if (error) console.log(error);
  if (stderr) console.log(stderr);
  if (stdout) console.log(stdout);
});
