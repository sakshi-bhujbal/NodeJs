const cp=require("child_process")
// cp.execSync('calc')   Opens calculator
// cp.execSync('start chrome') opens chrome
console.log('output'+ cp.execSync('node test.js'))