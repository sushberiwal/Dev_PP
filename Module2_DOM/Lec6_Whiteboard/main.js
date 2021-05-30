// create a mian.js file
// npm init -y
// npm i electron
// add this => "start":"electron ."
// in scripts in package.json file


const electron = require("electron");


const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

function createWindow(){
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration:true //enable node in this app
          }
      })

      mainWindow.loadFile("public/index.html").then( function(){
          mainWindow.webContents.openDevTools(); //open dev tools
          mainWindow.maximize();
        //   mainWindow.removeMenu();
      });
}


app.whenReady().then( function(){
    createWindow();
});



