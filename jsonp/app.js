'use strict';
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var server = http.createServer();
server.on('request',function(req, res){
    var urlPath = url.parse(req.url).pathname;
    var qs = querystring.parse(req.url.split('?')[1]);
    // qs对象有请求wd=ss&tim=ff&callback=test根据&自动解析而成
    //解析成的是普通对象，需转换成json对象，发送普通对象会报错
    if(urlPath === '/jsonp' && qs.callback){
        res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});
        qs.$$name= "test:跨域测试！";
        var data = JSON.stringify(qs);
        var callback = qs.callback+'('+data+');';
        res.end(callback);
    }
    else{
        res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
        res.end('Hell World\n');    
    }    
});
server.listen('2000');
console.log('Server running!');