const path = require('path')
const fs = require('fs')
// ../ 会返回上一层路径

const pathStr = path.join('/a', '/b/c', '../', './d', 'e')
console.log(pathStr) // /a/b/d/e

// fs.readFile(__dirname + "/test.txt", 'utf-8', (err, data) => {
//     console.log(err)
//     console.log(data)
// })

// __dirname 当前执行的目录文件路径
fs.readFile(path.join(__dirname, 'test.txt'), 'utf-8', (err, data) => {
    if(err) {
        return console.log(err.message)
    }
    console.log(data)
})


const fpath = '/Users/luyang/Documents/project/nodelearn/testaxios.html'

let fullName = path.basename(fpath)
console.log(fullName) // testaxios.html

let namewithoutext = path.basename(fpath, '.html')
console.log(namewithoutext) // testaxios

console.log(path.extname(fpath)) // .html