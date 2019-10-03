'use strict';

const fs = require('fs');
const args: string[] = process.argv;

declare function require(path: string): any;
export { };

// This program is responsible for writing new tasks into the todo list.

export function addTask(newTask: string) {
  try {
    if (newTask === undefined) {
      console.log('Unable to add: no task provided');
    } else {
    fs.appendFileSync('todo.txt', '\n' + newTask);
    console.log('Adding new task completed.')
    }
  }
  catch (error) {
    console.log('Unable to add new task.');
  }
};