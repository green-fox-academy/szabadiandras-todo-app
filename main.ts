'use strict';

const fs = require('fs'); // for writing into files (don't forget to use npm i @types/node)
const args: string[] = process.argv; //for using command line arguments. Don't forget that it is a string array w/ atleast 2 elements already!!!

import { noUserInput } from "./print-usage";
import { toDo } from "./list-tasks";
import { addTask } from "./add-task";

let mainProcess = () => {

  if (args.length == 2) {
    noUserInput();
  } else if (args[2] == '-l') {
    toDo();
  } else if (args[2] == '-a') {
    addTask(args[3]);
  } else {
    console.log('Task succesfully failed!');
  }
}
mainProcess();