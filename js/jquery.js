$(document).ready(function(){
	$(".greeting").hide(function(){});
	$(".content").mouseenter(function(){
		$(".greeting").fadeIn(1400);
	});
});