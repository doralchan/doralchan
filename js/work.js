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

		var i = 0;
		var projectArray = {
			1: ["jpg/project1-A.jpg", "jpg/project1-B.jpg"],
			2: ["jpg/project2-A.jpg", "jpg/project2-B.jpg"],
			3: ["jpg/project3-A.jpg", "jpg/project3-B.jpg"],
			4: ["jpg/project4-A.jpg", "jpg/project4-B.jpg"],
		};

		function imageChange(){
			if(i % projectArray.length)
			{i = 0;}
			$(".lightbox-img").attr("src", projectArray[1][i]);
			i++;
		}
		$("#lightbox-navright img").click(imageChange);

	});
});
