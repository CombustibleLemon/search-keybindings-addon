function saveOptions(e) {
	e.preventDefault();
	browser.storage.local.set({
		keyDown: document.querySelector("#keyDown").value,
		keyUp: document.querySelector("#keyUp").value,
		keySearchBar: document.querySelector("#keySearchBar").value
	});
}

function restoreOptions() {
	let keyDown = browser.storage.local.get("keyDown");
	let keyUp = browser.storage.local.get("keyUp");
	let keySearchBar = browser.storage.local.get("keySearchBar");

	console.log({keyDown, keyUp, keySearchBar});

	document.querySelector("#keyDown").value =
		keyDown || "74";
	document.querySelector("#keyUp").value =
		keyUp || "75";
	document.querySelector("#keySearchBar").value =
		keySearchBar || "191";

	function onError(error) {
		console.log('Error: ${Error}');
	}
}

function checkKeyPressed(e) {
	console.log("Key " e.keyCode + " pressed.");

	this.value = e.keyCode;
}

document.addEventListener("DOMContentLoaded", restoreOptions);

var inputs = document.getElementsByTagName("input");
for (int i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("keydown" checkKeyPressed, false)
}

document.querySelector("form").addEventListener("submit", saveOptions);

