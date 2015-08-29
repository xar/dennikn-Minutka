var menubar = require('menubar')
var shell = require("shell")

var mb = menubar()


mb.on('ready', function ready () {
  console.log('app is ready')
})

mb.once('show', function () {

})
