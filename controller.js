
const fs = require('fs');

//定义函数，根据exports的GET、POST、。。。设置router相应的方法
function addMapping(router, mapping) {
    for (var url in mapping) {
        //此处url为“GET /”、“POST /signin”
        if (url.startsWith('GET ')) {
            var path = url.substring(4);      //substring（开始位置，结束位置），此处截取的是“/”
            router.get(path, mapping[url]);   //即router.get("/", fn_index);
            console.log(`   register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);     //substring（开始位置，结束位置），此处截取的是“/signin”
            router.post(path, mapping[url]); //即router.post(“/signin”, fn_signin);
            console.log(`   register URL mapping: POST ${path}`);
        } else if (url.startsWith('PUT ')) {
            var path = url.substring(4);
            router.put(path, mapping[url]);
            console.log(`   register URL mapping: PUT ${path}`);
        } else if (url.startsWith('DELETE ')) {
            var path = url.substring(7);
            router.del(path, mapping[url]);
            console.log(`   register URL mapping: DELETE ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

//addControllers函数实现router.get（"/", fn_index）、router.post()。。。
function addControllers(router, dir) {
    fs.readdirSync(__dirname + '/' + dir).filter((f) => {   //readdirSync返回的是一个数组，对数组filter（fn）过滤（js原生)
        return f.endsWith('.js');                           //此处参数f即数组的每一项，[“index.js”,...]   
    }).forEach((f) => {
        console.log(`process controller: ${f}...`);
        let mapping = require(__dirname + '/' + dir + '/' + f);  
        addMapping(router, mapping);    
    });
}

//遍历目标路径(controllers)下js文件module.exports = {'GET /': fn_index, 'POST /signin': fn_signin。。。}
//实现以下
    //router.get('/hello/:name', async (ctx, next) => {
    //router.get('/', async (ctx, next) => {
    //router.post(“/signin”, fn_signin);
module.exports = function (dir) {
    let
        controllers_dir = dir || 'controllers',     //默认路径
        router = require('koa-router')();           //路由实例
    addControllers(router, controllers_dir);        //*设置路由
    return router.routes();
};