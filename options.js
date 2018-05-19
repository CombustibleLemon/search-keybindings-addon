function saveOptions(e) {
	e.preventDefault();
	browser.storage.local.set({
		keyDown: document.querySelector("#keyDown").value,
		keyUp: document.querySelector("#keyUp").value,
		keySearchBar: document.querySelector("#keySearchBar").value
	});
}

function restoreOptions() {
	var keyDown = browser.storage.local.get("keyDown");
	var keyUp = browser.storage.local.get("keyUp");
	var keySearchBar = browser.storage.local.get("keySearchBar");

	console.log({keyDown, keyUp, keySearchBar});

	document.querySelector("#keyDown").value =
		keyDown || "J";
	document.querySelector("#keyUp").value =
		keyUp || "K";
	document.querySelector("#keySearchBar").value =
		keySearchBar || "/";

	function onError(error) {
		console.log('Error: ${Error}');
	}
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);

