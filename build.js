const fs = require('fs');
const path = require('path');
const ChromeExtension = require('crx');
const rsa = require('node-rsa');

const crx = new ChromeExtension({
  privateKey: new rsa({ b: 2048 }).exportKey('pkcs1-private-pem'),
});

crx.load(path.resolve(__dirname, './src'))
.then(crx => crx.pack())
.then(crxBuffer => fs.writeFileSync('./ungoogled-chromium-extension-installer.crx', crxBuffer))
.catch(err=>{
  console.error( err );
});
