//  滚动距离超过800px   顶部搜索框出现 

var $fixedSearch = $('.search-fixd')

var $leftBtn = $('.left-side')    // 左侧固定按钮
var $scrollbtn = $('.scroll-btn') // li
var $goTop = $('.goTop')

// f1 f2 f3 ...
var ffcostume = $('.costume')

var timerout

// 滚动
$(window).on('scroll', function () {
  clearTimeout(timerout)
  var WscrollTop = $(this).scrollTop()
    if (WscrollTop > $(window).height()) {
      $fixedSearch.slideDown()
    }else{
      $fixedSearch.slideUp()
    }
    if (WscrollTop > ffcostume.eq(0).offset().top) {
      $('.left-side').fadeIn(500)
    }else{
      $('.left-side').fadeOut(500)
    }
    for(var i=0;i<=7;i++){
      if (WscrollTop+50>=ffcostume.eq(i).offset().top && WscrollTop+50<ffcostume.eq(i+1).offset().top){
        $scrollbtn.eq(i).addClass('active').siblings().removeClass('active')
      }else if(WscrollTop+50>=ffcostume.eq(7).offset().top){
        $scrollbtn.eq(8).addClass('active').siblings().removeClass('active')
      }
    }
})


// 点击滚动
$scrollbtn.on('click', function () {
  var liindex = $(this).index()
  $(this).addClass('active').siblings().removeClass('active')
  var pointScrollTop = ffcostume.eq(liindex).offset().top
  $('body,html').animate({scrollTop: pointScrollTop - 50 + 'px' })
})
// 回到顶部
$goTop.on('click', function () {
  $('body,html').animate({ scrollTop: '0px'  }, 300) 
})
