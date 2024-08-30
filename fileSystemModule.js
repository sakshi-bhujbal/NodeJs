const fs=require('fs')

//reading a file
let fileContent=fs.readFileSync('f1.txt')
console.log('The file content is: '+fileContent)

//writing a file will override the previous text
fs.writeFileSync('f1.txt','This is first text file after writing')
console.log('the file is written')
let content=fs.readFileSync('f1.txt')
console.log('the file content after writing: '+content)

//to update or append the file content
fs.appendFileSync('f1.txt',' this is appended data or text')
console.log('The data is appended')
let appendContent=fs.readFileSync('f1.txt')
console.log('The file text after appending is: '+appendContent)

//to delete a file
fs.unlinkSync('f2.txt')
console.log('The file is deleted')