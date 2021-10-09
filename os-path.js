const os = require("os")

//info about current user
console.log(os.userInfo())

console.log(`The System Uptime is ${os.uptime()} seconds`);
console.log(`${os.uptime/3600} hours`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem()/(1024*1024),
    freeMem: os.freemem()/(1024*1024),
}

console.log(currentOs);

const path = require('path')

console.log(path.sep, path.resolve()) //path to this folder, absolute path
