var search_keybindings_resultLinks;
var search_keybindings_currentIndex;
var search_keybindings_searchBar;
var search_keybindings_keyUp = 75;
var search_keybindings_keyDown = 74;
var search_keybindings_keySearch = 191;
var search_keybindings_keyEsc = 27;
var search_keybindings_keyHigh = 72;
var search_keybindings_keyMiddle = 78;
var search_keybindings_keyLow = 76;

console.log("Search_Keybindings loaded");

function selectResult(resultNum) {
	search_keybindings_resultLinks[resultNum].focus();
}

function indexResults() {
	var resultListPane = document.getElementById("rso");
	var resultList = resultListPane.getElementsByClassName("h3");

	search_keybindings_resultLinks = resultList.getElementByTagName("a");
	console.log(search_keybindings_resultLinks);
	search_keybindings_searchBar = document.getElementById("lst-ib");
}

function moveUp() {
	if (search_keybindings_currentIndex < 0) {
		return;
	}

	search_keybindings_currentIndex--;
	selectResult(search_keybindings_currentIndex);
}

function moveDown() {
	if (search_keybindings_currentIndex >= search_keybindings_resultLinks.length) {
		return;
	}

	search_keybindings_currentIndex++;
	selectResult(search_keybindings_currentIndex);
}

function moveHigh() {
	search_keybindings_currentIndex = 0;
	selectResult(search_keybindings_currentIndex);
}

function moveMiddle() {
	var mid = Math.floor(search_keybindings_resultLinks.length / 2)

	search_keybindings_currentIndex = mid;
	selectResult(search_keybindings_currentIndex);
}

function moveLoLow() {
	search_keybindings_currentIndex = search_keybindings_resultLinks.length - 1;
	selectResult(search_keybindings_currentIndex);
}

function selectSearchBar() {
	search_keybindings_searchBar.focus();
}

function escapeSearchBar() {
	selectResult(search_keybindings_currentIndex);
}

window.addEventListener("keydown", checkKeyPressed, false);
 
function checkKeyPressed(e) {
	console.log("Key " + e.keyCode + " pressed.");

	switch (e.keyCode) {
		case search_keybindings_keyDown:
			console.log("└ Key matches down key.");
			moveDown();
			break;
		case search_keybindings_keyUp:
			console.log("└ Key matches up key.");
			moveUp();
			break;
		case search_keybindings_keySearch:
			console.log("└ Key matches search key.");
			selectSearchBar();
			break;
		case search_keybindings_keyEsc:
			console.log("└ Key matches escape key.");
			escapeSearchBar();
			break;
		case search_keybindings_keyHigh:
			console.log("└ Key matches high key.");
			moveHigh();
			break;
		case search_keybindings_keyMiddle:
			console.log("└ Key matches middle key.");
			moveMiddle();
			break;
		case search_keybindings_keyLow:
			console.log("└ Key matches low key.");
			moveLow();
			break;
	}
}

