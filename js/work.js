$(document).ready(function(){

	var projectsArray = {
		1: ["jpg/project1-A.jpg"],
		2: ["jpg/project2-A.jpg", "jpg/project2-B.jpg"],
		3: ["jpg/project3-A.jpg", "jpg/project3-B.jpg"],
		4: ["jpg/project4-A.jpg", "jpg/project4-B.jpg"],
		5: ["jpg/project5-A.jpg", "jpg/project5-B.jpg"],
		6: ["jpg/project6-A.jpg", "jpg/project6-B.jpg"],
		7: ["jpg/project7-A.jpg", "jpg/project7-B.jpg"],
		8: ["jpg/project8-A.jpg", "jpg/project8-B.jpg"],
		9: ["jpg/project9-A.jpg", "jpg/project9-B.jpg"],
		10: ["jpg/project10-A.jpg", "jpg/project10-B.jpg"],
		11: ["jpg/project11-A.jpg", "jpg/project11-B.jpg"],
		12: ["jpg/project12-A.jpg", "jpg/project12-B.jpg", "jpg/project12-C.jpg", "jpg/project12-D.jpg", "jpg/project12-E.jpg", "jpg/project12-F.jpg"],
		13: ["jpg/project13-A.jpg", "jpg/project13-B.jpg"],
		14: ["jpg/project14-A.jpg", "jpg/project14-B.jpg"],
		15: ["jpg/project15-A.jpg", "jpg/project15-B.jpg"],
		16: ["jpg/project16-A.jpg", "jpg/project16-B.jpg"],
		17: ["jpg/project17-A.jpg", "jpg/project17-B.jpg"],
		18: ["jpg/project18-A.jpg", "jpg/project18-B.jpg"],
		19: ["jpg/project19-A.jpg", "jpg/project19-B.jpg", "jpg/project19-C.jpg", "jpg/project19-D.jpg"],
		20: ["jpg/project20-A.jpg", "jpg/project20-B.jpg"],
	};

	var currentIndex = 0;
	var currentProject;

	$(".image-thumbnails img").click(function () {
		var projectName = $(this).data('project');
		currentProject = projectsArray[projectName];
		if (!currentProject) {
			return;
		}
		showLightbox();
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
