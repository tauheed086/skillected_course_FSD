const os = require('os');
const fs = require('fs');

// console.log(os.EOL === '\n' ? 'Unix' : 'Windows');
// console.log(os.homedir());
// console.log(os.tmpdir());
// console.log(os.freemem());
// console.log(os.arch());
// console.log(os.totalmem());
// console.log(os.hostname());
// console.log(os.type());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.cpus());
// console.log(os.networkInterfaces());

// Async
fs.unlink('input.txt', (err) => {
    if (err) {
        console.log('File not found');
        return;
    } })


//Sync
