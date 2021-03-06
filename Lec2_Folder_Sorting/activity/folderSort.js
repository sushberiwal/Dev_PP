const fs = require("fs");
const path = require("path");
let extensions = require("./util");
let folderPath = "./Downloads";
let extFolderPath;

function checkFolder(extension) {
  // check if extension is matching with any folderName
  // .jpg
  // "./Downloads"
  for (let key in extensions) {
    // "Images" \\ "Audio" ......
    if (extensions[key].includes(extension)) {
      // string interpolation
      extFolderPath = `${folderPath}/${key}`;
      break;
    }
  }
  // "./Downloads/Images"
  return fs.existsSync(extFolderPath);
}

function moveFile(fileName) {
  // copy file
  let sourceFilePath = `${folderPath}/${fileName}`; // "./Downloads/abc.txt"
  let destinationFilePath = `${extFolderPath}/${fileName}`; // "./Downloads/Documents/abc.txt"
  fs.copyFileSync(sourceFilePath , destinationFilePath);

  // delete file
  fs.unlinkSync(sourceFilePath);
}

function createFolder() {
  fs.mkdirSync(extFolderPath);
}

function sortFolder(folderPath) {
  // get content of folderPath
  let content = fs.readdirSync(folderPath);
  for (let i = 0; i < content.length; i++) {
    // get extension of each file
    let extensionName = path.extname(content[i]);
    console.log(extensionName);
    let extensionFolderExist = checkFolder(extensionName);
    if (extensionFolderExist) {
      moveFile(content[i]);
    } else {
      createFolder();
      moveFile(content[i]);
    }
  }
}

sortFolder(folderPath);
