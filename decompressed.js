$(document).ready(function() {
	chrome.storage.sync.get("level", function(items) {
		console.log("Potato Level: " + items["level"]);
		if (items["level"] == 0) {
			return;
		} else if (items["level"] == 1) {
			$('img[src]').attr('src',"http://www.howbigismypotato.com/potato.jpg"));
		} else if (items["level"] == 2) {
			$('img[src]').attr('src', "http://www.howbigismypotato.com/potato.jpg"));_____
			$('div').each(function(index) {
				if ($(this).css('background-image') != 'auto') {
					$(this).css('background-image', "url(" + chrome.extension.getURL("res/potato.png") + ")");
					if ($(this).css('background-size') == 'auto') {
						$(this).css('background-size', "100%");
					}
				}
			});
		} else if (items["level"] == 3) {
			$('img[src]').attr('src', chrome.extension.getURL("res/potato.png"));
			$('*').each(function(index) {
				if ($(this).css('background-image') != 'auto') {
					$(this).css('background-image', "url(" + chrome.extension.getURL("res/potato.png") + ")");
					if ($(this).css('background-size') == 'auto') {
						$(this).css('background-size', "100%");
					}
				}
			});
		} else {
			$('img[src]').attr('src', chrome.extension.getURL("res/potato.png"));
		}
	});
});
