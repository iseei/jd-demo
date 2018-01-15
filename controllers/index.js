const fs = require('fs');
// const render = require('koa-render');
const views = require('koa-views');

//定义-响应GET请求的方法，设置body
//注意：action="/signin" method="post"
var fn_index = async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>
                <label for="name">姓名: </label>
                <input id="name" name="name" value="koa"></p>
            <p>
                <label for="password">密码:</label>
                <input id="password" name="password" type="password">
            </p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
};

//定义-处理POST请求的方法
var fn_signin = async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>登录成功Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>登录失败Login failed!</h1>
                             <p><a href="/">请重试Try again</a></p>`;
    }

};

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin,
    'GET /index': async(ctx, next)=>{
  		ctx.response.type = 'html';
  		ctx.response.body = fs.createReadStream('./static/index.html');
  	},
    'GET /x': async (ctx, next) => {  console.log("/x  浏览器端：Not Found")  },
    'GET /xx': async (ctx, next) => {  
    	fs.readFile('./static/index.html', 'utf-8', function (err, data) {
    		if (err) {
    			console.log(err);
    		} else {
    			console.log(data);
    			// ctx.response.type = 'text/html';
    			ctx.response.body = data;
    		}
    	});
    },
    'GET /xxx': async(ctx, next)=>{
    	ctx.body = render('index',{
    		title : 'Koa2 Test!'
    	});
  	}

};

