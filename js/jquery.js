$(document).ready(function(){

	$.fn.showdelay = function(){
		var delay = 800;
		return this.each(function(){
			$(this).delay(delay).fadeIn(1400);
			$(this).delay(1000).fadeOut(1600);
		delay += 3500;
		});
	};
	$(".greeting p").showdelay();
	$(".portfolio").delay(8400).slideDown(1000);

	$(".moreStep").click(function(){
		$(".stepcontent p").slideDown("slow");
		$(this).slideUp("slow");
	});

	$(".moreAbility").click(function(){
		$(".info ul").slideDown("slow");
		$(".info div:nth-child(3)").slideDown("slow");
		$(this).slideUp("slow");
	});

	$(".menu li:nth-child(3)").click(function(){
		$(".info ul").slideDown("slow");
		$(".moreAbility").slideUp("slow");
		$(".info div:nth-child(3)").slideDown("slow");
	});

	$(".moreBackground").click(function(){
		$(".background p").slideDown("slow");
		$(this).slideUp("slow");
	});

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
		$(".map").slideDown("slow");
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
			};
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