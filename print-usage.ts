'use strict';

const fs = require('fs');
const args: string[] = process.argv;

// This program handles the "print-usage task in the "To-do" list project.

export let noUserInput = () => {
  console.log(`
=================================
| Command Line Todo application |
|===============================|
|                               |
| Command line arguments:       |
|     -l   Lists all the tasks  |
|     -a   Adds a new task      |
|     -r   Removes an task      |
|     -c   Completes an task    |
|_______________________________|
  `)
}