var $navItem = $('.nav-item')           //li.nav-item
var $detailWrap = $('.detail-wrapper')  //div容器
var $navDetail = $('.nav-detail')       //div*16
var num

$navItem.on('mouseenter',function(){
  num = $(this).index()
  $detailWrap.show()
  $($navDetail[num]).show()
})
$navItem.on('mouseleave',function(){
  $detailWrap.hide()
  $($navDetail[num]).hide()
})

$navDetail.on('mouseenter',function(){
  $detailWrap.css({'display': 'block'})
  $(this).show()
})
$navDetail.on('mouseleave',function(){
  $detailWrap.css({'display': 'none'})
  $(this).hide()
})
