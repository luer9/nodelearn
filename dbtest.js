const mysql = require('mysql')

const db = mysql.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: '123456',
	database: 'test'
})

const query = 'select * from user'
db.query(query, (err, res) => {
    if(err) return console.log(err.message)

    console.log(res)
})

const user = {id: 3, name: "321", introduction: "帅姐2"}
const insert = 'INSERT INTO user (id, name, introduction) values(?, ?, ?)'

db.query(insert, [user.id, user.name, user.introduction], (err, res) => {
    if(err) return console.log(err.message)
    if(res.affectedRows === 1) { console.log('插入成功')}
})

// 需要更新的数据对象 
const user1 = {id: 2, name: 'sb', introduction: '人'}
const update = 'UPDATE user set name = ?, introduction = ? where id = ?'
db.query(update, [user1.name, user1.introduction, user1.id], (err, res) => {
    if(err) return console.log(err.message)
    if(res.affectedRows === 1) {console.log('更新成功')}
})

// 便捷方式
const update1= 'UPDATE user set ? where id = ?'
db.query(update1, [user1, user1.id], (err, res) => {
    if(err) return console.log(err.message)
    if(res.affectedRows === 1) {console.log('更新成功')}
})



// 删 
const del = 'DELETE FROM user where id = ?'
db.query(del, 2, (err, res) => {
    if(err) return console.log(err.message)
    if(res.affectedRows === 1) {
        console.log('删除成功')
    }
})

// db.end((err) => {
//     if(err) return console.log(err.message)
//     console.log('MySQL connection closed.')
// })