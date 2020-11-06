function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
// document.body.addEventListener('touchmove', function (e) {
//   e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
// }, {passive: false})

setTimeout(() => {
  autoScale({
    deviseW: 750,
    deviseH: 1508,
    center: 'middle',
    scroll: false,
    type: 'scale',
    box: '.scale-box',
    callBack: function (autoScaleInfo) {
      var showList = document.querySelectorAll('.show-are')
      // console.log(showList)
      for (var index = 0; index < showList.length; index++) {
        var element = showList[index];
        // console.log(autoScaleInfo.showHeight)
        element.style.height = autoScaleInfo.showHeight + 'px'
        element.style.paddingTop = -autoScaleInfo.hideHeight + 'px'
      }
    }
  })
}, 100);


$(document).ready(function() {
  /*p1Con*/
  var swiperP0 = new Swiper('.swiper-container-p0', {
    mode: 'horizontal',
    // autoplay: 5000,
    autoplayDisableOnInteraction: false,
    loop: true,
    slidesPerView: 1,
    pagination: '.swiper-pagination0',
    paginationClickable: true,
    mousewheelControl: false,
    onSlideChangeStart: function(swiper){
        $(".num0 .thisp").html(swiperP0.activeLoopIndex+1);
  }
});
var allNump0 = $(".swiper-pagination0").find(".swiper-pagination-switch").length;
$(".num0 .thisp").html(1);
$(".num0 .allp").html(allNump0);
$(".swiper-container-p0").mouseenter(function () {
    swiperP0.stopAutoplay();
}).mouseleave(function () {
    swiperP0.startAutoplay();
});
$(".next0").click(function(){
    swiperP0.swipeNext();
  });
  /*p2Con*/
  var mySwiperP1A = new Swiper('#swiper-container-p1',{
      pagination: '#pagination1',
      loop:true,
      grabCursor: true,
      paginationClickable: true
  })
  var mySwiperP1B = new Swiper('#swiper-container-p2',{
      pagination: '#pagination2',
      loop:true,
      grabCursor: true,
      paginationClickable: true
  })
  var mySwiperP1C = new Swiper('#swiper-container-p3',{
      pagination: '#pagination3',
      loop:true,
      grabCursor: true,
      paginationClickable: true
  })
  var mySwiperP1D = new Swiper('#swiper-container-p4',{
      pagination: '#pagination4',
      loop:true,
      grabCursor: true,
      paginationClickable: true
  })
  $(".sub1 li").bind('mouseover',function(){
      $(".sub1 li").attr("id","");
      $(".p2Con").hide();
    
      $(this).attr("id","active");
      $(".p2Con").eq($(this).index()).show();
  });
  /*p3Con*/
  $(".p3Con .fr p").eq(-1).css("border-bottom","none");
  /*p4Con*/
  $(".sub2 li").bind('mouseover',function(){
      $(".sub2 li").attr("class","");
      $(".txt1").hide();
    
      $(this).attr("class","active");
      $(".txt1").eq($(this).index()).show();
      $(".btn1").show();
  });
  $(".btn1").click(function(){
      $(".txt1").slideUp("slow");
      $(".btn1").hide();
  });
  $('.pic2 li:nth-child(4n)').css("margin-right",0);
  $(".more1").click(function(){
      $('.pic2').css("height","auto");
      $(".more1").hide();
  });
  /*p6Con*/
  var mySwiperP5 = new Swiper('.swiper-container-p5',{
      pagination: '.pagination5',
      loop:true,
      grabCursor: true,
      paginationClickable: true
  })
  $(".pagination5 span").each(function (i){
      $(this).text((i+1));
  })
  /*p8Con*/
  var mySwiper8 = new Swiper('.swiper-container-p8',{
      pagination: '.pagination8',
      loop:true,
      grabCursor: true,
      paginationClickable: true
  })
  $("#close1").click(function(){
      $(".r_float span").eq(0).hide();
  })
  $("#close2").click(function(){
      $(".r_float span").eq(1).hide();
  })
});