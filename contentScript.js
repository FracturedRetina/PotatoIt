$(document).ready(function() {
	chrome.storage.sync.get("enabled", function(items) {
		if (items["enabled"] != false) {
			$('img[src]').attr('src', chrome.extension.getURL("res/potato.png"));
		}
	});
});
