'use strict';

const fs = require('fs');
const args: string[] = process.argv;

declare function require(path: string): any;
export{};

// This program is responsible to read the file with the to-do's and show them in the consol

function writeToDo(fileName: string, inputName: string) {
  try {
      let data = fs.readFileSync(fileName, 'utf8');
      fs.writeFileSync(fileName, inputName);
  }
  catch (error) {
      console.log('Unable to write file: ' + fileName);
  }
}

let fileName: string = 'myfile.txt'
let inputName: string = 'Andras Szabadi'

writeToDo(fileName, inputName);

// let list = [
//   'Walk the dog',
//   'Buy milk',
//   'Do homework',
//   'szeva pali megyünk enni'
// ];
// 
// export function listTasks() {
//   
//   for (let i: number = 0; i <= list.length-1; i++) {
//     i.toString();
//     console.log(i+1 + " - " + list[i])   
// 
//   }
// }