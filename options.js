$(document).ready(function() {
	chrome.storage.sync.get("enabled", function(items) {
		if (items["enabled"] == false) {
			$('#enabled').attr("checked", false);
		} else {
			$('#enabled').attr("checked", true);
		}
	});

	$('#save').click(function() {
		var setting = {};
		setting["enabled"] = $('#enabled').is(":checked");
		
		chrome.storage.sync.set(setting,
			function() {
				console.log("\"enabled\": " + setting);
			}
		);

		//Check if settings were properly saved
		chrome.storage.sync.get("enabled", function(items) {
			if (setting["enabled"] === items["enabled"]) {
				alert("Settings saved successfully.");
			} else {
				alert("Problem saving settings.");
			}
		});
	});
});