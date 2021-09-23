const { app, BrowserWindow } = require('electron')
const path = require('path')
function createWindow () {
    const win = new BrowserWindow({
      width: 1116,
      height: 538,
      autoHideMenuBar:true,
      resizable:false,
      show:false,
      webPreferences:{
          preload: path.join(__dirname,"catFunctions.js")
      }

    })
    
    win.loadFile('index.html')
    win.once('ready-to-show',()=>{win.show()})
  }


  app.whenReady().then(() => {
    createWindow()
  })