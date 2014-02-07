$(document).ready(function() {
	// chrome.storage.sync.get("enabled", function(items) {
	// 	if (items["enabled"] == false) {
	// 		$('#enabled').attr("checked", false);
	// 	} else {
	// 		$('#enabled').attr("checked", true);
	// 	}
	// });
	
	//Set up document
	chrome.storage.sync.get("level", function(items) {
		$('#level').val(items["level"]);
	});
	
	
	//Set button listener
	$('#save').click(function() {
		var setting = {};
		setting["level"] = $('#level').val();
		
		chrome.storage.sync.set(setting,
			function() {
				console.log("\"level\": " + setting);
			}
		);

		//Check if settings were properly saved
		chrome.storage.sync.get("level", function(items) {
			if (setting["level"] === items["level"]) {
				alert("Settings saved successfully.");
			} else {
				alert("Problem saving settings.");
			}
		});
	});
});