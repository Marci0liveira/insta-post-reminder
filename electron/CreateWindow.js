const { BrowserWindow } = require('electron');

function createWindow () {
    const win = new BrowserWindow({
      width: 250,
      height: 310,
      show: false,
      frame: false,
      resizable: false,
      fullscreenable: false
    })
  
    win.loadFile('index.html');

    // fazer o blur da janela

    return win;
  }

  module.exports = createWindow();