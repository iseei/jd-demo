// ul.carousel>li>img
// div.ponit>
var $carousel = $('.carousel')
var $prev = $('.carousel-wrapper .prev')
var $next = $('.carousel-wrapper .next')
var $point = $('.carousel-wrapper .ponit')
var len = $carousel.find('img').length; //img的个数
var currentImgIndex = 0;
var timerId

// 视觉效果-切图  
function change(currentImgIndex) {
  $carousel.find('img').each(function (index) {
    // $(selector).each(function(index,element))
    if (index === currentImgIndex) {
      $(this).fadeIn(500, function () {changeLock = false})
    } else {
      $(this).fadeOut()
    }
  })
  showPoint()
}
// 视觉效果-切点
function showPoint() {
  $point.find('span').each(function (index) {
    if (index === currentImgIndex) {
      $(this).addClass('active')
    } else {
      $(this).removeClass('active')
    }
  })
}

// 鼠标移动事件
$carousel.on('mouseenter', function () {  clearInterval(timerId);})//处理事件捕获
$carousel.on('mouseleave', function () {
  clearInterval(timerId)
  timerId = setInterval(function () {
    currentImgIndex = (currentImgIndex==len-1) ? 0 : ++currentImgIndex
    change(currentImgIndex)
  }, 3000)
})

// 自动播放
// setInterval() 会返回一个ID，注意多setTimeout()是多个并行不是覆盖
// 区别setInterval()、clearInterval()和setTimeout()
timerId = setInterval(function () {
  currentImgIndex = (currentImgIndex==len-1) ? 0 : ++currentImgIndex
  change(currentImgIndex)
}, 3000)

// 点击事件
$prev.on('click', function () {
  currentImgIndex = (currentImgIndex==0) ? len-1 : --currentImgIndex
  change(currentImgIndex)
})
$next.on('click', function () {
  currentImgIndex = (currentImgIndex==len-1) ? 0 : ++currentImgIndex
  change(currentImgIndex)
})
$point.find('span').on('click',function(){
  clearInterval(timerId)
  currentImgIndex =  $(this).index()
  change(currentImgIndex)
})


