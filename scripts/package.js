const webpack = require("webpack");
const path = require('path');
const fs = require('fs');
const os = require('os');
const config = require('../webpack.config.js');
let key;

try {
  key = fs.readFileSync(path.resolve(os.homedir(), 'churchie_key.pem'));
} catch (e) {
  console.log("'~/churchie_key.pem' does not exist! Get this key from the project owner!");
  process.exit(0);
}

const ChromeExtension = require("crx");
const crx = new ChromeExtension({
  codebase: "http://localhost:8000/myFirstExtension.crx",
  privateKey: key
});

const compiler = webpack(config);
compiler.run(function(err, stats) {
  crx.load([
    './client/manifest.json',
    './client/index.html',
    './client/icon.png',
    './bundles/bundle.js',
  ])
  .then(crx => crx.pack())
  .then(crxBuffer => {
    console.log("Got the buffer", crxBuffer);
    fs.access('./packaged', (err) => {
      console.log('err', err);
      if (err) {
        fs.mkdirSync('./packaged');
      }
      fs.writeFileSync(`./packaged/churchie.crx`, crxBuffer);
    });
  })
  .catch(e => {
    console.log('found some error', e)
  });

});
