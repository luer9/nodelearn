const fs = require('fs')

fs.writeFile('./test1.txt', 'sbxw', (err) => {
    //通过检查 err 参数是否为真，可以轻松确定是否发生了错误。
    if(err) {
        console.err("文件写入失败: " + err.message)
        return;
    }
    console.log("文件写入成功!")
})