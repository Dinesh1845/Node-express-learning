const { log } = require('console');
const os = require('os')

let user = os.userInfo()
console.log(user);

console.log(`user uptime is ${os.uptime} in sec`);

const total = {
    name : os.userInfo(),
    release : os.release(),
    totmem : os.totalmem(),
    freem : os.freemem(),
    plat : os.platform(),
    host : os.hostname(),
    type : os.type(),
    network : os.networkInterfaces(),
}
console.log(total);