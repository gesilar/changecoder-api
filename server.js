var express=require('express');
//功能执行
var app=express();
//设置端口
app.set('port', process.env.PORT || 8000);
//注册路由
var route = require('./src/route');
app.use('/api', route);
//启动服务
var server=app.listen(app.get('port'),function(){
    console.log('server start and port is '+app.get('port'));
});

//连接数据库
var mongoose = require('mongoose');
var db = require('./config').db;
mongoose.connect(db.connectUrl, db.auth);

