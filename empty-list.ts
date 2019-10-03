'use strict';

const fs = require('fs');
const args: string[] = process.argv;

declare function require(path: string): any;
export { };

// This program is responsible to read the file and return a message if the file is empty

export function toDo() {
  try {
    let content = fs.readFileSync('todo.txt', 'utf8');
    content = content.split("\n")

    for (let i: number = 0; i <= content.length - 1; i++) {
      i.toString();
      console.log(i + 1 + " - " + content[i]);
    }
  }
  catch (error) {
    console.log('Unable to read file.');
  }
}