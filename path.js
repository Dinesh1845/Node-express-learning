const path = require('path')

const file = path.join("app.js")
console.log(file)

const name = path.basename(file)
console.log(name);
