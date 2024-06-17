const {stdin, stdout, stderr} = require('node:process');

stdin.on('data', data => {
  // Console.log and process.stdout are doing the same thing:
  console.log('Got this data from StandardIN: ', data.toString());
  stdout.write(`This is some text I want: ${data.toString()}\n` );
});

stderr.write('This is some text I do not want');
