// 跨域
var shelper =$('.shelper');
var input = $('.search>input');
// var searchli = $('.shelper .search li');

var inputf = $('.fixed-search>input');


function callbackD(response){
    console.log(response);
    var ulhtml='';
    if(response.s.length !=0){
        shelper.show();
        for(var i = 0;i<response.s.length;i++){
            ulhtml+='<a href=javascript:><li>'+response.s[i]+'</li></a>'
        }
    }
    shelper.html(ulhtml);
}
function test(data){
    // var obj = JSON.parse(this.data);
    alert("（2000端口返回）键入的是："+ data.wd);
}

// 事件
input.keyup(function(){
    var src='http://unionsug.baidu.com/su?wd='+this.value+'&p=3&cb=callbackD';
    cteatScript(src);
});
input.click(function(){
    var src='http://unionsug.baidu.com/su?wd='+'京东'+'&p=3&cb=callbackD';
    cteatScript(src);
});
shelper.on('mouseleave',function(){
    setTimeout(function(){
        shelper.hide();
    },800);
})


// 顶部搜索
inputf.keyup(function(){
    var src='http://172.96.195.69:2000/jsonp?wd='+this.value+'&callback=test';
    cteatScript(src);
});

function cteatScript(src){
    var script = document.createElement("script");
    script.src=src;
    document.body.appendChild(script);
}

// searchli.on('click',function(){  
//     input.val(this.text());
//     console.log(input.val()) ;
//     console.log(this.text()) ;
//     event.stopPropagation();
// })
