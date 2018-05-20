var search_keybindings_resultLinks = [];
var search_keybindings_currentIndex = 0;
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

function moveUp() {
	if (search_keybindings_currentIndex <= 0) {
		console.log("└ EOL");
		return;
	}
	console.log("│ current index is " + search_keybindings_currentIndex);
	search_keybindings_currentIndex--;
	console.log("└ targeting " + search_keybindings_currentIndex);
	selectResult(search_keybindings_currentIndex);
}

function moveDown() {
	if (search_keybindings_currentIndex >= search_keybindings_resultLinks.length - 1) {
		console.log("└ EOL");
		return;
	}

	console.log("│ current index is " + search_keybindings_currentIndex);
	search_keybindings_currentIndex++;
	console.log("└ targeting " + search_keybindings_currentIndex);
	selectResult(search_keybindings_currentIndex);
}

function moveHigh() {
	console.log("│ current index is " + search_keybindings_currentIndex);
	search_keybindings_currentIndex = 0;
	console.log("└ targeting " + search_keybindings_currentIndex);
	selectResult(search_keybindings_currentIndex);
}

function moveMiddle() {
	console.log("│ current index is " + search_keybindings_currentIndex);
	var mid = Math.floor(search_keybindings_resultLinks.length / 2)

	search_keybindings_currentIndex = mid;
	console.log("└ targeting " + search_keybindings_currentIndex);
	selectResult(search_keybindings_currentIndex);
}

function moveLow() {
	console.log("│ current index is " + search_keybindings_currentIndex);
	search_keybindings_currentIndex = search_keybindings_resultLinks.length - 1;
	console.log("└ targeting " + search_keybindings_currentIndex);
	selectResult(search_keybindings_currentIndex);
}

function selectSearchBar() {
	search_keybindings_searchBar.focus();
	console.log("└ targeting search bar");
}

/*
function escapeSearchBar() {
	selectResult(search_keybindings_currentIndex);
	console.log("└ exiting search bar");
}
*/

window.addEventListener("keydown", checkKeyPressed, false);
 
function checkKeyPressed(e) {
	console.log("Key " + e.keyCode + " pressed.");

	let ae = document.activeElement;
	console.log("│ Current active element is:");
	console.log(ae);
	let loc = search_keybindings_resultLinks.indexOf(ae);
	if(loc >= 0) {
		search_keybindings_currentIndex = loc;
	} 
	else if (ae.isSameNode(search_keybindings_searchBar)) {
		console.log("└ Search bar active, exiting.");
		return;
	}

	switch (e.keyCode) {
		case search_keybindings_keyDown:
			console.log("│ Key matches down key.");
			moveDown();
			break;
		case search_keybindings_keyUp:
			console.log("│ Key matches up key.");
			moveUp();
			break;
		case search_keybindings_keySearch:
			console.log("│ Key matches search key.");
			selectSearchBar();
			break;
		/*
		case search_keybindings_keyEsc:
			console.log("│ Key matches escape key.");
			escapeSearchBar();
			break;
		*/
		case search_keybindings_keyHigh:
			console.log("│ Key matches high key.");
			moveHigh();
			break;
		case search_keybindings_keyMiddle:
			console.log("│ Key matches middle key.");
			moveMiddle();
			break;
		case search_keybindings_keyLow:
			console.log("│ Key matches low key.");
			moveLow();
			break;
	}
}

/*
document.addEventListener("DOMContentLoaded", indexResults()) {
    console.log("DOM fully loaded and parsed");
});
*/
{
let resultListPane = document.getElementById("rso");
let resultList = resultListPane.getElementsByTagName("h3");

for (var i = 0, len = resultList.length; i < len; i++) {
	search_keybindings_resultLinks.push(resultList[i].getElementsByTagName("a")[0]);
}

console.log(search_keybindings_resultLinks);
search_keybindings_searchBar = document.getElementById("lst-ib");
}

