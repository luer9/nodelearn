const express = require('express')

const router = express.Router()


router.get('/', (req, res) => {
    res.send('hello')
})

router.get('/user/list', (req, res) => {
    res.send('Get user list')
})

router.get('/user/add', (req, res) => {
    res.send('Add User')
})

module.exports = router