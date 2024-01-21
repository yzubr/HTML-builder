const fs = require('fs');
const readline = require('readline');

// Create a writable stream to a text file
const fileStream = fs.createWriteStream('./02-write-file/input.txt', { flags: 'a' });

console.log("Welcome! Please input some text:");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  if (input.toLowerCase() === 'exit') {
    console.log("Goodbye!");
    rl.close();
    fileStream.end();
  } else {
    fileStream.write(input + '\n', (err) => {
      if (err) throw err;
      console.log('Text saved to input.txt. Please input some more text:');
    });
  }
});

process.on('SIGINT', () => {
  console.log("Goodbye!");
  rl.close();
  fileStream.end();
});