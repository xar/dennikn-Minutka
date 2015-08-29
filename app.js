var menubar = require('menubar')
var shell = require("shell")
var Positioner = require('electron-positioner')

var mb = menubar()


mb.on('ready', function ready () {
  console.log('app is ready')




  // your app code here
})

mb.once('show', function () {

  //mb.window.openDevTools();

})
