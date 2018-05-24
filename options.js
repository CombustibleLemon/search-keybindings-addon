var keyInputs = document.querySelectorAll("#search_keybindings_settings input[type=text]");

/**
 * Record form into browser storage
 * @param {Event} e Event of form submit
 */
function saveOptions(e) {
    e.preventDefault();

    var settings = new Object();

    for (i = 0; i < keyInputs.length; i++) {
        let chk = keyInputs[i].parentElement.querySelector("input[type=checkbox]");
        var bChk = false;
        if (chk.checked) {
            bChk = true;
        }
        settings[keyInputs[i].id] = {
            enabled: bChk,
            key: keyInputs[i].value.toLowerCase()
        };
    }

    chrome.storage.local.set(settings);
    chrome.storage.local.set({ version: 1.0 });
    console.log("Recorded settings.");
}

/**
 * Pull keybindings from user storage and fill form with key values
 */
function restoreOptions() {
    for (i = 0; i < keyInputs.length; i++) {
        //keyInputs[i].value = search_keybindings_getKeyBinding(keyInputs[i].id);
        document.getElementById(keyInputs[i].id + "-default").innerHTML =
            search_keybindings_getKeyBinding(keyInputs[i].id, true);
    }
}

/**
 * Restores default values
 */
function restoreDefaults() {
    for (i = 0; i < keyInputs.length; i++) {
        keyInputs[i].value = search_keybindings_getKeyBinding(keyInputs[i].id, true);
        keyInputs[i].parentElement.querySelector("input[type=checkbox]").setAttribute("checked", "checked");
    }
}

/**
 * Record keypress and fill corresponding input field with key value
 * @param {Event} e Keydown event
 */
function checkKeyPressed(e) {
    console.log("Key " +
        e.keyCode + " pressed.");

    this.parentElement.parentElement.querySelector("input[type=text]").value = e.key;
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
 * Enable or disable manual entry of key values
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

/*
document.getElementById("manualKeyCodes").addEventListener(
    "change", manualKeyCodes, false
);
*/

document.getElementById("restore-defaults").addEventListener(
    "click", restoreDefaults, false
);

document.querySelector("form").addEventListener("submit", saveOptions);
document.addEventListener("DOMContentLoaded", restoreOptions);

let test = new Promise(() => {
    var optionKeys = [];

    keyInputs.forEach(element => {
        optionKeys.push(element.id);
    });

    chrome.storage.local.get(optionKeys, function(items) {
        if (items.keyDown === undefined) {
            restoreDefaults();
        }

        Object.keys(items).forEach(function(objKey, index) {
            var k = items[objKey];
            let val = k.key
            var input = document.getElementById(objKey);
            console.log("Read " + val + " for " + objKey);
            input.value = val;

            if (k.enabled) {
                input.parentElement.querySelector("input[type=checkbox]").setAttribute("checked", "checked");
            }
        });
    });
});