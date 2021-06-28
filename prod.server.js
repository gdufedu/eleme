/*
 * @Author: ZhaoQiaoLi
 * @Date: 2021/06/28 19:36
 * @LastEditTime: 2021/06/28 19:41
 * @LastEditors: ZhaoQiaoLi
 * @Description: 
 */
var express = require('express');
var config = require('./config/index');
var port = process.env.POST || config.build.port;
var app = express();
const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

var router = express.Router();
router.get('/seller', function (req, res) {
    res.json({
        errno: 0,
        data: seller
    })
})

router.get('/goods', function (req, res) {
    res.json({
        errno: 0,
        data: goods
    })
})

router.get('/ratings', function (req, res) {
    res.json({
        errno: 0,
        data: ratings
    })
})
app.use('/api', router)

app.use(express.static('./dist'))
module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:' + port + '\n')
})