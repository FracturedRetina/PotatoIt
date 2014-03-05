//Load jQuery
var js = document.createElement('script');
js.src = "//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js";
document.head.appendChild(js);


//Starchy scripts
$(document).ready(function() {
	var level = 2;
	
	console.log("Potato Level: " + level);
	if (level == 0) {
		return;
	} else if (level == 1) {
		$('img[src]').attr('src', "http://www.howbigismypotato.com/potato.jpg"));
	} else if (level == 2) {
		$('img[src]').attr('src', "http://www.howbigismypotato.com/potato.jpg"));
		$('div').each(function(index) {
			if ($(this).css('background-image') != 'auto') {
				$(this).css('background-image', "url(http://www.howbigismypotato.com/potato.jpg)");
				if ($(this).css('background-size') == 'auto') {
					$(this).css('background-size', "100%");
				}
			}
		});
	} else if (level == 3) {
		$('img[src]').attr('src', "http://www.howbigismypotato.com/potato.jpg"):
		$('*').each(function(index) {
			if ($(this).css('background-image') != 'auto') {
				$(this).css('background-image', "url(http://www.howbigismypotato.com/potato.jpg)");
				if ($(this).css('background-size') == 'auto') {
					$(this).css('background-size', "100%");
				}
			}
		});
	} else {
		$('img[src]').attr('src', "http://www.howbigismypotato.com/potato.jpg");
	}
});
