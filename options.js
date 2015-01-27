$(document).ready(function() {
	//Set up document
	chrome.storage.sync.get("level", function(items) {
		$('#level').val(items["level"]);
	});
	
	
	//Set settings on button click
	$('#save').click(function() {
		var setting = {};
		setting["level"] = $('#level').val();
//		setting["icon"] = $('#iconForm').serialize().match(/\=(.*)/g).substr(1);
		
		chrome.storage.sync.set(setting,
			function() {
				console.log("\"level\": " + setting["level"]);
//				console.log("\"icon\": " + setting["icon"]);
			}
		);

		//Check if settings were properly saved
		chrome.storage.sync.get("level", function(items) {
			var saved =
			setting["level"] === items["level"]
//			&& setting["icon"] === items["icon"]
			;
			
			if (saved) {
				alert("Settings saved successfully.");
			} else {
				alert("Problem saving settings.");
			}
		});
	});
});