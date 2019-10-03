'use strict';

const fs = require('fs'); // for writing into files (don't forget to use npm i @types/node)
const args: string[] = process.argv; //for using command line arguments. Don't forget that it is a string array w/ atleast 2 elements already!!!

import { noUserInput } from "./print-usage";
import { listTasks } from "./list-tasks"

let mainProcess = () => {

  if (args.length == 2) {
    console.log(noUserInput());
  } else if (args[2] == '-l') {
    console.log(listTasks());
  } else {
    console.log('this is the error handling');
  }
}
mainProcess();