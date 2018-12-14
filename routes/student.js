const routes = require('express').Router()

routes.get('/', (req, res) => {
    res.send('ini get halaman student')
})

routes.post('/', (req, res) => {
    res.send('ini post halaman student')
})

module.exports = routes