$(document).ready(function(){

	$.fn.showdelay = function(){
		var delay = 1200;
		return this.each(function(){
			$(this).delay(delay).fadeIn(2000);
			$(this).delay(2500).fadeOut(1000);
		delay += 5500;
		});
	};

	$(".greeting p").showdelay();

	$(".moreMiddle").click(function(){
		$(".middlecontent p").slideDown("slow");
		$(this).slideUp("slow");
	});

	$(".moreBottom").click(function(){
		$(".info ul").slideDown("slow");
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

	$(".mail img").click(function(){
		$(".mail p").fadeIn();
	});
	$(".cell img").click(function(){
		$(".cell p").fadeIn();
	});

});

// '.image-thumbnails' - project thumbnails
// 'lightbox-img' - project featured image
// 'lightbox-showing' - project page

//var images = [
//	{ src: 'css/darkblur.jpg', thumb: 'css/darkblur-small.jpg', index: 0 },
//	{ src: 'css/darkblur.jpg', thumb: 'css/darkblur-small.jpg', index: 1 }];