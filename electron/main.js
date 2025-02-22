const { app } = require('electron')
const path = require('path')
const controlWindow = require('./ControlWindow.js');

function App() {
    const win = require('./CreateWindow.js');
    const tray = require('./Tray.js');

    const { toggle } = controlWindow(win, tray);

    tray.on('click', toggle);
    win.on('blur', win.hide);
}

app.whenReady().then(App);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
