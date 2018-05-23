var keyInputs = document.querySelectorAll("#search_keybindings_settings input[type=number]");

/**
 * Record form into browser storage
 * @param {Event} e Event of form submit
 */
function saveOptions(e) {
    e.preventDefault();

    var settings = new Object();

    for (i = 0; i < keyInputs.length; i++) {
        settings[keyInputs[i].id] = { enabled: true, key: keyInputs[i].value };
    }

    chrome.storage.local.set(settings);
}

/**
 * Pull keybindings from user storage and fill form with keycodes
 */
function restoreOptions() {
    for (i = 0; i < keyInputs.length; i++) {
        keyInputs[i].value = search_keybindings_getKeyBinding(keyInputs[i].id);
    }
}

/**
 * Record keypress and fill corresponding input field with keycode
 * @param {Event} e Keydown event
 */
function checkKeyPressed(e) {
    console.log("Key " +
        e.keyCode + " pressed.");

    this.parentElement.parentElement.querySelector("input[type=number]").value = e.keyCode;
    this.removeEventListener("keydown");
}

/**
 * Enable listening for keydown events which are subsequently used to fill corresponding input field
 * @param {Event} e Button click event
 */
function btnClick(e) {
    this.addEventListener("keydown",
        checkKeyPressed, false);
}

/**
 * Enable or disable manual entry of keycodes
 * @param {Event} e Checkbox change event
 */
function manualKeyCodes(e) {
    if (this.checked) {
        for (i = 0; i < keyInputs.length; i++) {
            keyInputs[i].removeAttribute("readonly");
        }
    } else {
        for (i = 0; i < keyInputs.length; i++) {
            keyInputs[i].setAttribute("readonly", "readonly");
        }
    }
}

var readerButtons = document.querySelectorAll(".input-group-prepend button");
for (i = 0; i < readerButtons.length; i++) {
    readerButtons[i].addEventListener("click",
        btnClick, false)
}

document.getElementById("manualKeyCodes").addEventListener(
    "change", manualKeyCodes, false
);

document.querySelector("form").addEventListener("submit", saveOptions);
document.addEventListener("DOMContentLoaded", restoreOptions);