/*加载模块*/
const express = require('express');
const ip = require('ip').address();
const chalk = require('chalk');
const http = require('http');
const path = require('path');

const app = express();
app.set('port', 8081);
app.use(express.static(path.join(__dirname, 'dist')));

// 启动server
http.createServer(app).listen(app.get('port'), function() {
    const url = 'http://' + ip + ':' + app.get('port');
    console.log('静态资源服务器已启动 ' + chalk.green(url));
});