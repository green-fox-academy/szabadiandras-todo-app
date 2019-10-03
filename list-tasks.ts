'use strict';

const fs = require('fs');
const args: string[] = process.argv;

declare function require(path: string): any;
export { };

// This program is responsible to read the file with the to-do's and show them in the consol

export function toDo() {
  try {

    let content = fs.readFileSync('todo.txt', 'utf8');
    content = content.split("\n")

    if (content.length == 1) {
      console.log("No to-do's for today! :)");
    } else {
      for (let i: number = 0; i <= content.length - 1; i++) {
        i.toString();
        console.log(i + 1 + " - " + content[i]);
      }
    }
  }
  catch (error) {
    console.log('Unable to read file.');
  }
};