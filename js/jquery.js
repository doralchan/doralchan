$(document).ready(function(){

	$.fn.showdelay = function(){
		var delay = 800;
		return this.each(function(){
			$(this).delay(delay).fadeIn(1500);
			$(this).delay(1500).fadeOut(1000);
		delay += 4200;
		});
	};

	$(".greeting p").showdelay();

	$(".moreStep").click(function(){
		$(".stepcontent p").slideDown("slow");
		$(this).slideUp("slow");
	});

	$(".moreAbility").click(function(){
		$(".info ul").slideDown("slow");
		$(this).slideUp("slow");
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
	});
	$(".morecell").click(function(){
		$(this).slideUp(50);
		$(".cell p").slideDown("fast");
	});

    $(window).scroll( function(){
        $('.pathbackground').each(function(){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window = bottom_of_object ){
                $(this).animate({opacity:1},1500);
                $(window).off("scroll");
            }
        });
    });

    $(".image-thumbnails img").click(function(){
    	$('.lightbox').addClass("lightbox-showing");
    	$('.lightbox-img').attr('src', $(this).data('large'));

    });

});

// '.image-thumbnails' - project thumbnails
// 'lightbox-img' - project featured image
// 'lightbox-showing' - project page

//var images = [
//	{ src: 'css/darkblur.jpg', thumb: 'css/darkblur-small.jpg', index: 0 },
//	{ src: 'css/darkblur.jpg', thumb: 'css/darkblur-small.jpg', index: 1 }];