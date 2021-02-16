import { app, BrowserWindow } from 'electron';
import * as path from 'path';

app.once('ready', () => {
    console.log('App is ready');

    const win = new BrowserWindow({
        width: 600,
        height: 400,
        webPreferences: {
            contextIsolation: true  //get rid of contextIsolation deprecation message: https://github.com/electron/electron/issues/23506
        }
    });

    const rendererHtmlPath = path.join(`${__dirname}/renderer.html`);
    win.loadFile(rendererHtmlPath).then(() => {
        // some implementation here
    }).catch(e => console.error(e));
});