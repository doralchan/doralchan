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

	$(".menu li:nth-child(3)").click(function(){
		$(".hide").show();
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
		$(".key").fadeIn("slow");
	});

});







