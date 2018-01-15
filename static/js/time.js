
var maxtime = 3*60*60+20*60+18; //按秒计算  
function countDown() {
    if (maxtime >= 0) {
        var hour = Math.floor(maxtime / (60*60));
        var minutes = Math.floor(maxtime / 60 % 60);
        var seconds = Math.floor(maxtime % 60);
        // msg = "距离结束还有" + minutes + "分" + seconds + "秒";
        // document.all["timer"].innerHTML = msg;
        // if (maxtime == 5 * 60)alert("还剩5分钟");
        //     --maxtime;
        $('#hour').text(checkTime(hour));
        $('#mini').text(checkTime(minutes));
        $('#sec').text(checkTime(seconds));
        --maxtime;
    } else{
        clearInterval(timer);
        alert("时间到，结束!");
    }
}

function checkTime(i){ 
    if(i<10) 
    { 
      i = "0" + i; 
    } 
    return i; 
  } 
timer = setInterval("countDown()", 1000); 