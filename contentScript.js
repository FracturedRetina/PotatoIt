$(document).ready(function() {
	chrome.storage.sync.get("level", function(items) {
		var png = chrome.extension.getURL("res/potato.png");

		console.log("Potato Level: " + items["level"]);

		switch (items["level"]) {
			//Do nothing
			case '0': return;
			//Replace images
			case '1':
				// $("link[rel='icon'][href]").attr('href', png);
				$('img[src]').attr('src', png);
				break;
			//Replace images and div background images
			case '2':
				$('img[src]').attr('src', png);
				$('div').each(function(index) {
					//If element has background image
					if ($(this).css('background-image') != 'auto') {
						//Change background image
						$(this).css('background-image', "url(" + png + ")");
						//Size background image to fit element
						if ($(this).css('background-size') == 'auto') {
							$(this).css('background-size', "100%");
						}
					}
				});
				break;
			//Replace images and ALL background images
			case '3': "value", 
				$('img[src]').attr('src', png);
				$('*').each(function(index) {
					//If element has background image
					if ($(this).css('background-image') != 'auto') {
						//Change background image
						$(this).css('background-image', "url(" + png + ")");
						//Size background image to fit element
						if ($(this).css('background-size') == 'auto') {
							$(this).css('background-size', "100%");
						}
					}
				});
				break;
			//See case 1
			case '4':
				$('img[src]').attr('src', png);
				break;
			//See case 1
			case undefined:
				$('img[src]').attr('src', png);
				break;
				var setting = {};
				setting["level"] = 1;
				chrome.storage.sync.set(setting, function() {});
	});
});

