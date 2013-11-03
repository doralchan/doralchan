$(document).ready(function(){

	$(".image-thumbnails img").click(function(){
		$(".lightbox").addClass("lightbox-showing");
		$(".lightbox-img").attr("src", $(this).data('project'));
		$("body").css("overflow", "hidden");
		$(".lightbox-exit img").click(function(){
			$(".lightbox").removeClass("lightbox-showing");
			$("body").css("overflow", "auto");
			$(".container").show();
		});
		$(".lightbox-navright img").click(function(){
			$(".lightbox-img").attr("src", "(jpg/"+projectArray[i]+")");
		});
		$(".lightbox-navleft img").click(function(){
			$(".lightbox-img").attr("src", "(jpg/"+projectArray[i]+")");
		});
	});

		var i = 0;
		var projectArray = [
		{src: "jpg/project1-A.jpg", thumb: "jpg/thumb1.jpg"},
		{src: "jpg/project1-B.jpg", thumb: "jpg/thumb1.jpg"},
		{src: "jpg/project2-A.jpg", thumb: "jpg/thumb2.jpg"},
		{src: "jpg/project2-B.jpg", thumb: "jpg/thumb2.jpg"},
		];

});







