// 实现需求
// 拆分 time.html
// -》time.css, time.js, time.html 存放到clock文件夹中
const path = require('path')
const fs = require('fs')

// 匹配 style
// / ---- / 表示这是个正则表达式
// [\s\S]* \s 空白字符 \S 非空白字符 * 匹配任意次数
const regStyle = /<style>[\s\S]*<\/style>/

// 匹配 script
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, 'time.html'), 'utf-8', (err, data) => {
    if(err) {
        return console.log("err")
    }
    // 读取html之后调取对应的方法，解析出css js html 文件
    resolveCSS(data)
    resolveJS(data)
    resolveHTML(data)
})

// fs.writeFile 里面只能写入文件 不能创建文件
// 新写入的内容 会 覆盖旧内容
function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr)
    // 提取出来的css样式
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, 'clock/index.css'), newCSS, err => {
        if(err) {
            return console.log('write err')
        }
        console.log('write success')
    } )
}

function resolveJS(htmlStr) {
    const r2 = regScript.exec(htmlStr)
    // 提取出来的css样式
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, 'clock/index.js'), newJS, err => {
        if(err) {
            return console.log('write err: ', err.message)
        }
        console.log('write success')
    } )
}


function resolveHTML(htmlStr) {
    const newHTML = htmlStr.replace(regStyle, '<link rel = "stylesheet" href = "./index.css"/>')
    .replace(regScript, '<script src="./index.js"> </script>') 
    fs.writeFile(path.join(__dirname, 'clock/index.html'), newHTML, err => {
        if(err) {
            return console.log('write err')
        }
        console.log('write success')
    })
}