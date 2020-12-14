

//モジュール読み込み
const express = require('express')
const routes = require('./routes')
const ejs = require('ejs')
const config = require('config')


const layouts = require('express-ejs-layouts')


//config 設定
const port = config.server.port
const host = config.server.host

//Express 作成
const app = express()

//EJS 設定
// app.set('ejs', ejs.renderFile)
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout')
app.set(layouts)


//JSON
app.use(express.json())

//URLエンコード
app.use(express.urlencoded({ extended: true }))

//静的ファイル有効
app.use(express.static(__dirname + '/public'))

//ミドルウェアルーティング
app.use(routes)

//ポート:3000待機
app.listen(port, host, () => {
    console.log(`app listen: http://${host}:${port}`)
});
