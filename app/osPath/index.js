
const os = require('os')
// console.log(os.userInfo())
// console.log(os.homedir())
// console.log(os.hostname())
// console.log(os.totalmem())

const path = require('path')
// console.log(path)
const extentionName= path.extname('index.html')
console.log(extentionName)

// const extentionName= path.extname('index.html')
// console.log(extentionName)

//  const join= path.join(__dirname + '/vite')
const join= path.join(__dirname + '/../vite')
 console.log(join)