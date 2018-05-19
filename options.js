function saveOptions(e) {
	e.preventDefault();
	browser.storage.local.set{{
		keyDown: document.querySelector("#keyDown").value
		keyUp: document.querySelector("#keyUp").value
		keySearchBar: document.querySelector("#keySearchBar").value
	}};
}

function restoreOptions() {
	document.querySelector("#keyDown").value =
		browser.storage.local.get("keyDown").toUpper() || "J";
	document.querySelector("#keyUp").value =
		browser.storage.local.get("keyUp").toUpper() || "K";
	document.querySelector("#keySearchBar").value =
		browser.storage.local.get("keySearchBar").toUpper() || "/";

	function onError(error) {
		console.log('Error: ${Error}');
	}
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);

