$(document).ready(function(){
	$(".content").mouseenter(function(){
		$(".greeting").fadeIn(2000);
		$(".greeting").delay(8000).fadeOut(2000);
	});
	$(".more").click(function(){
		$(".middlecontent p").slideToggle("slow");
		$(this).fadeOut("fast");
	});

});


// '.image-thumbnails' - project thumbnails
// 'lightbox-img' - project featured image
// 'lightbox-showing' - project page

//var images = [
//	{ src: 'css/darkblur.jpg', thumb: 'css/darkblur-small.jpg', index: 0 },
//	{ src: 'css/darkblur.jpg', thumb: 'css/darkblur-small.jpg', index: 1 }];