$(document).ready(function() {
	chrome.storage.sync.get("enabled", function(items) {
		if (items["enabled"] == "undefined") {
			items["enabled"] = true;
			
			var setting = {};
			setting["enabled"] = true;
			chrome.storage.sync.set(setting, function() {});
		}
		
		if (items["enabled"]) {
			$('img[src]').attr('src', chrome.extension.getURL("res/potato.png"));
		}
	});
});
