# example-electron
electron desktop application example

## Step 1

Based on [electron quick start](http://electron.atom.io/docs/tutorial/quick-start/)

```bash
# installing dependencies
npm init
npm i -D electron
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

## Step 2

### Dev workflow

Relaunch electron on code changes.

```bash
npm i -D watch
```

Add the relaunch script to `package.json` file:
```json
{
  ...
  "scripts": {
    "dev": "watch npm start src/electron/**/*"
  },
  ...
}
```

### Packaging
Fast and easy application packaging can be done with the help of [electron-packager](https://github.com/electron-userland/electron-packager),
you can check all the build options [here](https://github.com/electron-userland/electron-packager/blob/master/docs/api.md).

```bash
npm i -D electron-packager
```

```json
{
  ...
  "scripts": {
    "pack": "electron-packager . --overwrite --out dist/pack",
    "pack:all": "electron-packager . --platform=darwin,linux,win32 --arch=x64 --overwrite --out dist/pack"
  },
  ...
}
```

#### NOTES
- `mas` - annotate [Mac App Store](http://electron.atom.io/docs/tutorial/mac-app-store-submission-guide/)
- You'll need wine in order to build windows applications on unix systems (take a while to install).
  ```bash
  brew cask install xquartz
  brew install wine
  ```

### Building
If you need production level application distribution [electron-builder](https://github.com/electron-userland/electron-builder)
is probably the tool you need, it can handle all the distribution life cycle.


```bash
npm i -D electron-builder
```

The option (and there are many) are split in to two: [cli](https://github.com/electron-userland/electron-builder#cli-usage)
and ["build"](https://github.com/electron-userland/electron-builder/wiki/Options) field in the `package.json` file

```json
{
  ...
  "scripts": {
    "build": "build",
    "build:all": "build --mac --win --linux --x64"
  },
  "build": {
    "appId": "com.electron.example-electron",
    "directories": {
      "output": "dist/build"
    }
  }
  ...
}
```

#### NOTES

- Multi platform building can be a bit tricky, and some time even impossible.
- There are a lot of platform specific related configuration, test every changes before distributing.
- [Auto update](https://github.com/electron-userland/electron-builder/wiki/Auto-Update) is baked in (need to be configure).
- There a [docker](https://github.com/electron-userland/electron-builder/wiki/Docker) option for linux and windows.
