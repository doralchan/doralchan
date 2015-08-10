$(document).ready(function(){

	$(".foreground-items-container img").hover(

		function(){
			$(".animation-name").text($(this).attr('title'))},
		function(){
			$(".animation-name").text('');});	

});

