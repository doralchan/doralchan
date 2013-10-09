$(document).ready(function(){
	$(".container").mouseenter(function(){
		$(".greeting").one().slideDown(2000);
		$(".greeting").delay(8000).fadeOut(1000);
	});
	$(".moreMiddle").click(function(){
		$(".middlecontent p").slideToggle("slow");
		$(this).fadeOut("fast");
	});


	var fixed = false;
	$(document).scroll(function(){
		if( $(this).scrollTop() > 70){
			if(! fixed) {
				fixed = true;
				$(".scrollup").fadeIn({position: "fixed", display: "block"});
			}
		} else { if (fixed){
			fixed = false;
			$(".scrollup").fadeOut({display: "none"});
		}}
	});

});

// '.image-thumbnails' - project thumbnails
// 'lightbox-img' - project featured image
// 'lightbox-showing' - project page

//var images = [
//	{ src: 'css/darkblur.jpg', thumb: 'css/darkblur-small.jpg', index: 0 },
//	{ src: 'css/darkblur.jpg', thumb: 'css/darkblur-small.jpg', index: 1 }];