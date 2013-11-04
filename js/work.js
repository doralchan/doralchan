$(document).ready(function(){

	var projectsArray = {
		1: ["jpg/project1.jpg", "jpg/project1-A.jpg", "jpg/project1-B.jpg"],
		2: ["jpg/project2-A.jpg", "jpg/project2-B.jpg"],
		3: ["jpg/project3-A.jpg", "jpg/project3-B.jpg"],
		4: ["jpg/project4-A.jpg", "jpg/project4-B.jpg"],
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
		return x < a ? a : x > b ? b : x;
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
