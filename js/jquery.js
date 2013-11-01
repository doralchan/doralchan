$(document).ready(function(){

	$(".portfolio").slideDown(1000);

	$(".more").on("click", function(){
		var src = $(".more img");
		$(".hide").slideToggle("slow");
		if (src.data("active")){
			src.attr("src","img/more.svg");
			src.data("active", false);
		}else{
			src.attr("src","img/less.svg");
			src.data("active", true);
		}
	});

var i = 0;
var circleArray = ["clearcircle1.svg", "clearcircle2.svg", "clearcircle3.svg"];

function circleSwap(){
       if ( i > circleArray.length - 1){i = 0;}
       $(".logo").css("backgroundImage", "url(img/"+circleArray[i]+")");
       i++;
}
window.setInterval(circleSwap, 3000);

var fixed = false;
	$(document).scroll(function(){
		if( $(this).scrollTop() > 70){
			if(! fixed) {
				fixed = true;
				$(".scrollup").fadeIn({position: "fixed", display: "block"});
			}
		} else {if (fixed){
			fixed = false;
			$(".scrollup").fadeOut({display: "none"});
		}}
	});

	$("a[href='#navbar']").click(function() {
		$("html, body").animate({ scrollTop: 0 });
		return false;
	});

	$(".moremail").click(function(){
		$(this).slideUp(50);
		$(".mail p").slideDown("fast");
	});
	$(".morelocation").click(function(){
		$(this).slideUp(50);
		$(".location p").slideDown("fast");
	});
	$(".morecell").click(function(){
		$(this).slideUp(50);
		$(".cell p").slideDown("fast");
	});

	$(window).scroll( function(){
		$(".bottomcontent img:nth-child(1)").each(function(){
		var bottom_of_object = $(this).position().top + $(this).outerHeight();
		var bottom_of_window = $(window).scrollTop() + $(window).height();
		if( bottom_of_window < bottom_of_object ){
			$(this).animate({opacity:1},1500);
			$(".bottomcontent img:nth-child(2)").delay(1500).animate({opacity:0.3},1000);
			$(this).delay(1500).animate({opacity:0.35},900);
			$(".bottomcontent img:nth-child(3)").delay(3200).animate({opacity:1},850);
			$(".bottomcontent img:nth-child(4)").delay(3100).animate({opacity:1},850);
			$(".bottomcontent img:nth-child(2)").delay(800).animate({opacity:0.1},850);
			$(window).off("scroll");
			}
		});
	});

	$(".simplify").click(function(){
		$(this).fadeOut("slow");
		$(".label").fadeIn("slow");
	});

	$(".image-thumbnails img").click(function(){
		$(".lightbox").addClass("lightbox-showing");
		$(".lightbox-img").attr("src", $(this).data('large'));
		$("body").css("overflow", "hidden");
		$(".lightbox-exit img").click(function(){
			$(".lightbox").removeClass("lightbox-showing");
			$("body").css("overflow", "auto");
			$(".container").show();
		});
		$(".lightbox-navright img").click(function(){
			$(".lightbox-img").attr("src", $(this).next().data('large'));
		});
		$(".lightbox-navleft img").click(function(){
			$(".lightbox-img").attr("src", $(this).previous().data('large'));
		});
	});

});

var images = [
{ src: 'jpg/large1.jpg', thumb: 'jpg/thumb1.jpg', index: 0 },
{ src: 'jpg/large2.jpg', thumb: 'jpg/thumb2.jpg', index: 1 },
{ src: 'jpg/large3.jpg', thumb: 'jpg/thumb1.jpg', index: 2 },
{ src: 'jpg/large4.jpg', thumb: 'jpg/thumb2.jpg', index: 3 },
{ src: 'jpg/large4.jpg', thumb: 'jpg/thumb2.jpg', index: 4 },
];