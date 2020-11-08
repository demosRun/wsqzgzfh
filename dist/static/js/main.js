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
    // var banOffTop=$(".nav").offset().top;
    // var scTop=0;
    // $(document).scroll(function(){
    //     scTop=$(this).scrollTop();
    //     //console.log(scTop);
    //     if(scTop>=banOffTop){
    //         $(".nav").addClass("fixed-top");
    //     }else{
    //         $(".nav").removeClass("fixed-top");
    //     }
    // })
    /*p1Con*/
    var swiperP0 = new Swiper('.swiper-container-p0', {
	    mode: 'horizontal',
	    autoplay: 5000,
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
    $(".vball").bind('click',function(){
        // $(".swiper-container-p0").hide();
        $("#next1").hide();
        $(".video").show();
        $(".video video")[0].play();
    })
    $(".video i").bind('click',function(){
        $(".swiper-container-p0").show();
        $("#next1").show();
        $(".video").hide();
        $(".video video")[0].close();
    })
    /*p1Con*/
    $('.pic1:nth-child(2n+1)').css("margin-left",0);
    $('.list1 li:nth-child(2n+1)').css("margin-left",0);
    $(".more1").click(function(){
        if ($(this).text() == "加载显示更多") {
            $(this).html("收起<img src='src/images/hide.png'>");
            $(".list1 ul").css("height","auto");
        }else{
            $(this).html("加载显示更多<img src='src/images/more.png'>");
            $(".list1 ul").css("height","170px");
        }
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
    $(".txt2").bind('click',function(){
        $(".pic3").hide();
      
        $(".pic3").eq($(this).index()).show();
    });
    /*p4Con*/
    $(".sub2 li").bind('mouseover',function(){
        $(".sub2 li").attr("class","");
        $(".txt1").hide();
      
        $(this).attr("class","active");
        $(".txt1").eq($(this).index()).show();
        $(".btn1").show();
    });
    $(".more2").click(function(){
        if ($(this).text() == "收起") {
            $(this).html("加载显示更多<img src='src/images/more.png'>");
            $(".p4Box").hide()
        }else{
            $(this).html("收起<img src='src/images/hide.png'>");
            $(".p4Box").show();
        }
    });
    /*p5Con*/
    $('.pic2 li:nth-child(4n)').css("margin-right",0);
    $(".more3").click(function(){
        if ($(this).text() == "加载显示更多") {
            $(this).html("收起<img src='src/images/hide.png'>");
            $(".pic2").css("height","auto");
        }else{
            $(this).html("加载显示更多<img src='src/images/more.png'>");
            $(".pic2").css("height","446px");
        }
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
    /*p7Con*/
    $(".list2 li").bind('mouseover',function(){
        $(".p7Con .fl div").hide();

        $(".p7Con .fl div").eq($(this).index()).show();
    });
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