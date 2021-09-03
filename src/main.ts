import { app, BrowserWindow } from 'electron';
import * as path from 'path';

app.once('ready', () => {
    console.log('App is ready');

    const win = new BrowserWindow({
        width: 600,
        height: 400,
        webPreferences: {
            nativeWindowOpen: true  //get rid of nativeWindowOpen deprecation message: https://github.com/electron/electron/issues/28511
        }
    });

    const rendererHtmlPath = path.join(`${__dirname}/renderer.html`);
    win.loadFile(rendererHtmlPath).then(() => {
        // some implementation here
    }).catch(e => console.error(e));
});