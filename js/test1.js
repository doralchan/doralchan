$(".canvas").mousemove(function(event){
	var x = event.clientX - this.offsetLeft;
	var y = event.clientY - this.offsetTop;
	$(".point").text("your x position is " + x + "and your y position is " + y);
});

$(".canvas").mousemove(function(event){
	var x = event.clientX - this.offsetLeft;
	var y = event.clientY - this.offsetTop;
	if (130 <= x && x <=150 && 430 <= y && y <=450 || 510 <= x && x <= 530 && 280 <= y && y <= 300){
		$(".canvas li:nth-child(2)").show();
	}else{
		$(".canvas li:nth-child(2)").hide();
	}
});