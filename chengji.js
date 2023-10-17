const fs = require('fs')
const infile = '成绩.txt'
const outfile = '成绩ok.txt'
fs.readFile(infile, 'utf-8', (err, data) => {
    if(err) {
        console.log("读取失败：" + err.message)
        return;
    }
    console.log("读取成功！")
    const arr = data.split(' ')
    const arrNew = []
    arr.forEach(item => {
        arrNew.push(item.replace('=', ':'))
    })
    const res = arrNew.join("\n")
    console.log(res)

    fs.writeFile(outfile, res, (err) => {
        if(err) {
            console.log("写入失败：" + err.message)
            return;
        }
        console.log("成绩写入成功！")
    })
})