const { Tray } = require('electron');
const { resolve } = require('path');

const iconPath = resolve(__dirname, '../', 'assets', 'nintendo-switch.png');

function createTray() {

    const tray = new Tray(iconPath);
    tray.setToolTip('Post Reminder');
    return tray;
}

module.exports = createTray();