// var items = document.getElementsByTagName("li");
// for (var i = 0; i<items.length; i++) {
// items[i].id = "listitem";
// }

// var books = [
//   {title: 'The Design of EveryDay Things',
//    author: 'Don Norman',
//    alreadyRead: false
//   },
//   {title: 'The Most Human Human',
//   author: 'Brian Christian',
//   alreadyRead: true
//   }];

// for (var i = 0; i<books.length; i++) {
// var addbookP = document.createElement("p");
// var addbookText = document.createTextNode(books[i].title + " by " +books[i].author);
// document.body.appendChild(addbook);
// addbookP.appendChild(addbookText);
// }

// function makeMadLib() {
//	var getStory = document.getElementId("story");
//	var getNoun = document.getElementById("noun").value;
//	var getAdjective = document.getElementById("adjective").value;
//	var getName = document.getElementById("person").value;
//	getStory.innerHTML = "My story is"+ getNoun + getAdjective + getName;
//  }
//  var libButton = document.getElementById("lib-button");
//  libButton.addEventListener('click', makeMadLib, false);

//var profile = document.createElement("img");
//profile.src = "http://eofdreams.com/data_images/dreams/cat/cat-06.jpg";
//document.body.appendChild(profile);

$(".canvas").mousemove(function(event){
	var x = event.clientX - this.offsetLeft;
	var y = event.clientY - this.offsetTop;
	$(".point").text("your x position is " + x + "and your y position is " + y);
});

$(".canvas").mousemove(function(event){
	var x = event.clientX - this.offsetLeft;
	var y = event.clientY - this.offsetTop;
	if (130 <= x && x <=150 && 430 <= y && y <=450){
		$(".canvas li:nth-child(2)").show();
	}else{
		$(".canvas li:nth-child(2)").hide();
	};
});