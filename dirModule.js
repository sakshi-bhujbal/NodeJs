const fs=require('fs')
// fs.mkdirSync('myDir')
// let folderPath='E:\\College Material\\NodeJs'
// let folderContent=fs.readdirSync(folderPath)
// console.log('The folder content is:',folderContent)

//to check dir exists or not
let exist=fs.existsSync('myDir')
console.log(exist)

//to remove the dir
fs.rmdirSync('myDir')
console.log('Dir has been deleted')