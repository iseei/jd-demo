var shelper =$('.shelper');             //ul容器
var input = $('.search>input');         //input
var inputf = $('.fixed-search>input');  //顶部input

// 搜索框事件
input.one('click',function(){
    input.val("京东");
    ajaxurl();
});
//按下键盘
input.keyup(function(){
    ajaxurl();
});
//keypress按下抬起
input.keypress(function (e) {
    if (e.keyCode==13) {
    // var src='http://unionsug.baidu.com/su?wd='+this.value+'&p=3&cb=callbackD';
    // cteatScript(src);
    ajaxurl();
    }
});

//鼠标移除ul
shelper.on('mouseleave',function(){
    setTimeout(function(){
        shelper.hide();
    },800);
})


// 顶部搜索事件
inputf.keyup(function(){
    var src='http://172.96.195.69:2000/jsonp?wd='+this.value+'&callback=test';
    cteatScript(src);
});


// 注意：为动态元素childSelector绑定事件
// $(selector).on(event,childSelector,data,function,map)
$('.shelper').on('click','li',function(){  
    input.val($(this).text());
})


// 函数:创造script
function cteatScript(src){
    var script = document.createElement("script");
    script.src=src;
    document.body.appendChild(script);
}

//ajax请求
function ajaxurl(wd) {
    var strdomin = $.trim(input.val());
    var qsData = { 'wd': strdomin, 'p': '3', 'cb': 'callbackD', 't': '1324113456725' };
    $.ajax({
        async: false,
        url: "http://suggestion.baidu.com/su",
        type: "GET",
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        data: qsData,
        timeout: 5000,
        success: function (json) {
            console.log(json);
        },
        error: function (xhr) {
            console.log(xhr);
        }
    });
}

//回调函数1
function callbackD(response){
    console.log(response);
    var ulhtml='';
    if(response.s.length !=0){
        shelper.show();
        for(var i = 0;i<response.s.length;i++){
            ulhtml+='<li>'+response.s[i]+'</li>'
        }
    }
    shelper.html(ulhtml);
}
// 回调函数2
function test(data){
    // var obj = JSON.parse(this.data);
    alert("（2000端口返回）键入的是："+ data.wd);
}












// var shelper =$('.shelper');             //ul容器
// var input = $('.search>input');         //input
// var inputf = $('.fixed-search>input');  //顶部input

// // 搜索框事件
// input.one('click',function(){
//     var src='http://unionsug.baidu.com/su?wd='+'实时'+'&p=3&cb=callbackD';
//     cteatScript(src);
// });
// //按下键盘
// input.keyup(function(){
//     var src='http://unionsug.baidu.com/su?wd='+this.value+'&p=3&cb=callbackD';
//     cteatScript(src);
// });
// //回车键盘
// input.keypress(function(){
//     var src='http://unionsug.baidu.com/su?wd='+this.value+'&p=3&cb=callbackD';
//     cteatScript(src);
// })
// //鼠标移除ul
// shelper.on('mouseleave',function(){
//     setTimeout(function(){
//         shelper.hide();
//     },800);
// })


// // 顶部搜索事件
// inputf.keyup(function(){
//     var src='http://172.96.195.69:2000/jsonp?wd='+this.value+'&callback=test';
//     cteatScript(src);
// });


// // 注意：为动态元素childSelector绑定事件
// // $(selector).on(event,childSelector,data,function,map)
// $('.shelper').on('click','li',function(){  
//     input.val($(this).text());
// })


// // 函数:创造script
// function cteatScript(src){
//     var script = document.createElement("script");
//     script.src=src;
//     document.body.appendChild(script);
// }
// //ajax请求
// function FillUrls() {
//     var strdomin = $.trim($("#Text1").val());
//     var qsData = { 'wd': strdomin, 'p': '3', 'cb': 'ShowDiv', 't': '1324113456725' };
//     $.ajax({
//         async: false,
//         url: "http://suggestion.baidu.com/su",
//         type: "GET",
//         dataType: 'jsonp',
//         jsonp: 'jsoncallback',
//         data: qsData,
//         timeout: 5000,
//         success: function (json) {
//         },
//         error: function (xhr) {
//             alert(xhr);
//         }
//     });
// }
// //回调函数1
// function callbackD(response){
//     console.log(response);
//     var ulhtml='';
//     if(response.s.length !=0){
//         shelper.show();
//         for(var i = 0;i<response.s.length;i++){
//             ulhtml+='<li>'+response.s[i]+'</li>'
//         }
//     }
//     shelper.html(ulhtml);
// }
// // 回调函数2
// function test(data){
//     // var obj = JSON.parse(this.data);
//     alert("（2000端口返回）键入的是："+ data.wd);
// }