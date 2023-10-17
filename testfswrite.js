const fs = require('fs')
fs.readFile('./test.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log("读取文件时出错: ", err)
        return;
    }
    console.log("文件内容: \n", data)
})