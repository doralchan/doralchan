$(document).ready(function(){

	var projectsArray = {
		1: ["jpg/project1-A.jpg"],
		2: ["jpg/project2-A.jpg"],
		3: ["jpg/project3-A.jpg", "jpg/project3-B.jpg", "jpg/project3-C.jpg", "jpg/project3-D.jpg", "jpg/project3-E.jpg"],
		4: ["jpg/project4-A.jpg", "jpg/project4-B.jpg", "jpg/project4-C.jpg", "jpg/project4-D.jpg", "jpg/project4-E.jpg"],
		5: ["jpg/project5-A.jpg", "jpg/project5-B.jpg", "jpg/project5-C.jpg", "jpg/project5-D.jpg", "jpg/project5-E.jpg", "jpg/project5-F.jpg", "jpg/project5-G.jpg"],
		6: ["jpg/project6-A.jpg", "jpg/project6-B.jpg", "jpg/project6-C.jpg", "jpg/project6-D.jpg", "jpg/project6-E.jpg", "jpg/project6-F.jpg"],
		7: ["jpg/project7-A.jpg", "jpg/project7-B.jpg", "jpg/project7-C.jpg", "jpg/project7-D.jpg", "jpg/project7-E.jpg", "jpg/project7-F.jpg", "jpg/project7-G.jpg", "jpg/project7-H.jpg", "jpg/project7-I.jpg", "jpg/project7-J.jpg", "jpg/project7-K.jpg"],
		8: ["jpg/project8-A.jpg", "jpg/project8-B.jpg", "jpg/project8-C.jpg", "jpg/project8-D.jpg", "jpg/project8-E.jpg", "jpg/project8-F.jpg", "jpg/project8-G.jpg", "jpg/project8-H.jpg"],
		9: ["jpg/project9-A.jpg"],
		10: ["jpg/project10-A.jpg", "jpg/project10-B.jpg", "jpg/project10-C.jpg", "jpg/project10-D.jpg", "jpg/project10-E.jpg", "jpg/project10-F.jpg", "jpg/project10-G.jpg"],
		11: ["jpg/project11-A.jpg", "jpg/project11-B.jpg"],
		12: ["jpg/project12-A.jpg", "jpg/project12-B.jpg", "jpg/project12-C.jpg", "jpg/project12-D.jpg", "jpg/project12-E.jpg", "jpg/project12-F.jpg"],
		13: ["jpg/project13-A.jpg", "jpg/project13-B.jpg", "jpg/project13-C.jpg", "jpg/project13-D.jpg", "jpg/project13-E.jpg", "jpg/project13-F.jpg", "jpg/project13-G.jpg", "jpg/project13-H.jpg"],
		14: ["jpg/project14-A.jpg", "jpg/project14-B.jpg", "jpg/project14-C.jpg", "jpg/project14-D.jpg", "jpg/project14-E.jpg", "jpg/project14-F.jpg", "jpg/project14-G.jpg", "jpg/project14-H.jpg", "jpg/project14-I.jpg"],
		15: ["jpg/project15-A.jpg"],
		16: ["jpg/project16-A.jpg", "jpg/project16-B.jpg", "jpg/project16-C.jpg"],
		17: ["jpg/project17-A.jpg", "jpg/project17-B.jpg", "jpg/project17-C.jpg"],
		18: ["jpg/project18-A.jpg"],
		19: ["jpg/project19-A.jpg"],
		20: ["jpg/project20-A.jpg", "jpg/project20-B.jpg", "jpg/project20-C.jpg", "jpg/project20-D.jpg"],
	};

	function preloadImages(){
		var projectArrayData = new Array(projectsArray.length);
		for(i = 0; i < projectArrayData.length; i++){
			projectArrayData[i] = new Image();
		}
	}

	var currentIndex = 0;
	var currentProject;

	$(".image-block").click(function () {
		var projectName = $(this).children(".image-thumbnails img").data('project');
		currentProject = projectsArray[projectName];
		if (!currentProject) {
			return;
		}
		showLightbox();
	});

	var src;
	$(".image-block").hover(
	function(){
		src = $(this).children(".image-thumbnails img").attr("src");
		$(this).children(".image-thumbnails img").attr("src", "img/hover.svg");
		var title = $(this).children(".image-thumbnails img").data('title');
		$(this).find(".caption").text(title).show();
	},
	function(){
		$(this).children(".image-thumbnails img").attr("src", src);
		$(".caption").hide();
	});

	function showLightbox() {
		$(".lightbox").addClass("lightbox-showing");
		$("body").css("overflow", "hidden");
		$(".lightbox-exit img").on('click', hideLightbox);
		$("#lightbox-navright img").on('click', showNext);
		$("#lightbox-navleft img").on('click', showPrev);
		showImage(0);
	}

	function showPrev() {
		showImage(currentIndex - 1);
	}

	function showNext() {
		showImage(currentIndex + 1);
	}

	function showImage(index) {
		currentIndex = clamp(index, 0, currentProject.length - 1);
		$("#lightbox-navleft img").toggle(currentIndex > 0);
		$("#lightbox-navright img").toggle(currentIndex < currentProject.length - 1);
		$(".lightbox-img").attr("src", currentProject[currentIndex]);
	}

	function clamp(x, a, b) {
		if(x<a){
			return a;
		}else if(x>b){
			return b;
		}
		return x;
	}

	function hideLightbox() {
		$(".lightbox").removeClass("lightbox-showing");
		$("body").css("overflow", "auto");
		$(".container").show();
		$("#lightbox-navright img").off('click', showNext);
		$("#lightbox-navleft img").off('click', showPrev);
		$(".lightbox-exit img").off('click', hideLightbox);
	}
});
