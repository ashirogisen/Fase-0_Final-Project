var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var nexto = document.querySelector('.next_pls');
var backto = document.querySelector('.back_pls');


/* Looping through images and making the thumb bar */

for (var i = 1; i < 5; i++) {
	var arr_title = ["", "AOTY2016", "AOTY2017", "AOTY2018", "AOTY2019"];
	var image_title = arr_title[i];
	var newImage = document.createElement('img');
	var iString = i.toString();
	newImage.setAttribute('src','img/pic' + iString + '.jpg');
	newImage.setAttribute('title', image_title);
	newImage.onclick = function (e) {
		var imgSource = e.target.getAttribute('src');
		changeDisplay(imgSource);
	}
	thumbBar.appendChild(newImage);
}

function changeDisplay(source) {
	displayedImage.setAttribute('src', source);
}

/* Displaying next image */

nexto.onclick = function() {
	var currentImage = displayedImage.getAttribute('src');

	if (currentImage === 'img/pic4.jpg') {
		changeDisplay('img/pic1.jpg');
	} else {
		var nextImage = currentImage.split('/');
		var jpgSourceSplit = nextImage[1].split('.');
		var newPicSource = jpgSourceSplit[0].replace(jpgSourceSplit[0][jpgSourceSplit[0].length - 1], Number(jpgSourceSplit[0][jpgSourceSplit[0].length - 1]) + 1);

		jpgSourceSplit.splice(0, 1, newPicSource);

		var newSource = nextImage[0] + '/' + jpgSourceSplit.join('.');

		changeDisplay(newSource);
	}
}

/* Displaying previous image */

backto.onclick = function() {
	var currentImage = displayedImage.getAttribute('src');

	if (currentImage === 'img/pic1.jpg') {
		changeDisplay('img/pic4.jpg');
	} else {
		var nextImage = currentImage.split('/');
		var jpgSourceSplit = nextImage[1].split('.');
		var newPicSource = jpgSourceSplit[0].replace(jpgSourceSplit[0][jpgSourceSplit[0].length - 1], Number(jpgSourceSplit[0][jpgSourceSplit[0].length - 1]) - 1);

		jpgSourceSplit.splice(0, 1, newPicSource);

		var newSource = nextImage[0] + '/' + jpgSourceSplit.join('.');

		changeDisplay(newSource);
	}
}