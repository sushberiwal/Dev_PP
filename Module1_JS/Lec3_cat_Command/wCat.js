#!/usr/bin/env node

let content = process.argv.slice(2);
let fs = require("fs");


let flags = [];
let files = [];

for (let i = 0; i < content.length; i++) {
  // "-s"
  if (content[i].startsWith("-")) {
    flags.push(content[i]);
  } else {
    files.push(content[i]);
  }
}

// console.log(flags);
// console.log(files);
// for files output
let fileKaData = "";
for (let i = 0; i < files.length; i++) {
  // f1.txt => f2.txt
  fileKaData += fs.readFileSync(files[i]);
  fileKaData += "\r\n";
}
// console.log(fileKaData);

// console.log(fileKaData);

if(!flags.length){
  console.log(fileKaData);
  return;
}



let data = fileKaData.split("\r\n");


let removedSpaces = [];

// node wCat.js -s -b -n f1.txt
// node wCat.js -s -n f1.txt

// flags = ["-s" , "-b" , "-n"];
// files = ["f1.txt"];

if (flags.includes("-s")) {
  removeLargeSpaces(data);
}

if (flags.includes("-n") && flags.includes("-b")) {
  if (flags.indexOf("-n") < flags.indexOf("-b")) {
    // -n pehle aya tha
    if (flags.includes("-s")) {
      addLineNumberToAllLines(removedSpaces);
    } else {
      addLineNumberToAllLines(data);
    }
  } else {
    // -b pehle aya tha
    if (flags.includes("-s")) {
      addLineNumberToNonEmptyLines(removedSpaces);
    } else {
      addLineNumberToNonEmptyLines(data);
    }
  }
} else if (flags.includes("-n")) {
  if (flags.includes("-s")) {
    addLineNumberToAllLines(removedSpaces);
  } else {
    addLineNumberToAllLines(data);
  }
} else if (flags.includes("-b")) {
  if (flags.includes("-s")) {
    addLineNumberToNonEmptyLines(removedSpaces);
  } else {
    addLineNumberToNonEmptyLines(data);
  }
}

function addLineNumberToNonEmptyLines(data) {
  let count = 1;
  for (let i = 0; i < data.length; i++) {
    if (data[i] != "") {
      data[i] = `${count}. ${data[i]}`;
      count++;
    }
  }
  let addedLineNumber = data.join("\n");
  console.log(addedLineNumber);
}

function addLineNumberToAllLines(data) {
  for (let i = 1; i < data.length + 1; i++) {
    data[i - 1] = `${i}. ${data[i - 1]}`;
  }
  let addedLineNumber = data.join("\n");
  console.log(addedLineNumber);
}

function removeLargeSpaces(data) {
  let emptyPushed = false;
  for (let i = 0; i < data.length; i++) {
    if (data[i] == "" && !emptyPushed) {
      removedSpaces.push(data[i]);
      emptyPushed = true;
    } else if (data[i] != "") {
      removedSpaces.push(data[i]);
    }
  }
}
