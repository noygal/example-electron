# example-electron
electron desktop application example

## Stage 1

Based on [electron quick start](http://electron.atom.io/docs/tutorial/quick-start/)

```bash
# installing dependencies
npm init
npm i -S electron
# project structure
mkdir src
mkdir src/electron
mkdir static
# copy example files
curl https://raw.githubusercontent.com/electron/electron-quick-start/master/main.js -o src/electron/main.js
curl https://raw.githubusercontent.com/electron/electron-quick-start/master/index.html -o static/index.html
```

Now edit `package.json`:

```json
{
  ...
  "main": "src/electron/main.js",
  "scripts": {
    "start": "electron ."
  },
  ...
}
```

Change `src/electron/main.js` so it would load the static html file:

```js
...
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '../../static/index.html'),
    protocol: 'file:',
    slashes: true
  }))
...
```

Now you can start your app:
```bash
npm start
```