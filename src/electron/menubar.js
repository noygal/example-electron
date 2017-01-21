const menubar = require('menubar')
const path = require('path')
const url = require('url')

const mb = menubar({
  index: url.format({
    pathname: path.join(__dirname, '../../static/menubar.html'),
    protocol: 'file:',
    slashes: true
  })
})

mb.on('ready', function ready () {
  console.log('app is ready')
  // your app code here
})
