var search-keybindings-resultLinks;
var search-keybindings-currentIndex;
var search-keybindings-searchBar;
var search-keybindings-keyUp;
var search-keybindings-keyDown;
var search-keybindings-keySearch;
var search-keybindings-keyEsc = 27;
var search-keybindings-keyHigh = 72;
var search-keybindings-keyMiddle = 77;
var search-keybindings-keyLow = 76;

function selectResult(resultNum) {
	search-keybindings-resultLinks[resultNum].focus();
}
	

function indexResults() {
	var resultListPane = document.getElementById("rso");
	var resultList = resultListPane.getElementsByClassName("h3");

	search-keybindings-resultLinks = resultList.getElementByTagName("a");
	search-keybindings-searchBar = document.getElementById("lst-ib");
}

function moveUp() {
	if (search-keybindings-currentIndex < 0) {
		return;
	}

	search-keybindings-currentIndex--;
	selectResult(search-keybindings-currentIndex);
}

function moveDown() {
	if (search-keybindings-currentIndex >= search-keybindings-resultLinks.length) {
		return;
	}

	search-keybindings-currentIndex++;
	selectResult(search-keybindings-currentIndex);
}

function moveHigh() {
	search-keybindings-currentIndex = 0;
	selectResult(search-keybindings-currentIndex);
}

function moveMiddle() {
	var mid = Math.floor(search-keybindings-resultLinks.length / 2)

	search-keybindings-currentIndex = mid;
	selectResult(search-keybindings-currentIndex);
}

function moveLoLow() {
	search-keybindings-currentIndex = search-keybindings-resultLinks.length - 1;
	selectResult(search-keybindings-currentIndex);
}

function selectSearchBar() {
	search-keybindings-searchBar.focus();
}

function escapeSearchBar() {
	selectResult(search-keybindings-currentIndex);
}

window.addEventListener("keydown", checkKeyPressed, false);
 
function checkKeyPressed(e) {
	switch (e.keyCode) {
		case search-keybindings-keyDown:
			moveDown();
			break;
		case search-keybindings-keyUp:
			moveUp();
			break;
		case search-keybindings-keySearch:
			selectSearchBar();
			break;
		case search-keybindings-keyEsc:
			escapeSearchBar();
			break;
		case search-keybindings-keyHigh:
			moveHigh();
			break;
		case search-keybindings-keyMiddle:
			moveMiddle();
			break;
		case search-keybindings-keyLow:
			moveLow();
			break;
	}
}

window.onload = indexResults;
