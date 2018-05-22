var keyInputs = document.querySelectorAll("#search_keybindings_settings input[type=number]");

function saveOptions(e) {
    e.preventDefault();

    for (i = 0; i < keyInputs.length; i++) {
        chrome.storage.local.set(
            keyInputs[i].id, keyInputs[i].value
        )
    }
}

function restoreOptions() {
    for (i = 0; i < keyInputs.length; i++) {
        keyInputs[i].value = search_keybindings_getKeyBinding(keyInputs[i].id);
    }
}

function checkKeyPressed(e) {
    console.log("Key " +
        e.keyCode + " pressed.");

    this.parentElement.parentElement.querySelector("input[type=number]").value = e.keyCode;
    this.removeEventListener("keydown");
}

function btnClick(e) {
    this.addEventListener("keydown",
        checkKeyPressed, false);
}

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