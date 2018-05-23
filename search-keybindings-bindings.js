/**
 * Default keybindings, based on Vim
 * @constant
 * @default
 */
var search_keybindings_defaults = new Map([
    ["keyDown", 74],
    ["keyUp", 75],
    ["keySearchBar", 191],
    ["keyEsc", 27],
    ["keyHigh", 72],
    ["keyMiddle", 78],
    ["keyLow", 76]
]);

/**
 * User-specified settings
 */
var search_keybindings_userSettings = new Map();

/** @private */
search_keybindings_defaults_iterator = search_keybindings_defaults.keys();

/**
 * Intended to retrieve settings from storage and record in search_keybindings_userSettings
 */
while (search_keybindings_userSettings.size < search_keybindings_defaults.size) {
    var keyTarget = search_keybindings_defaults_iterator.next().value;
    var keyNum;
    var val;

    chrome.storage.local.get(keyTarget, function(items) {
        Object.keys(items).forEach(function(objKey, index) {
            let k = items[objKey];
            console.log(k);
            keyNum = k.key;
        });
    });

    val = keyNum || null;
    search_keybindings_userSettings.set(keyTarget, val);
    console.log("Read " + val + " for " + keyTarget);
}

delete search_keybindings_defaults_iterator;

/**
 * Retrieves keycode from storage or from defaults if storage is null
 * 
 * @param {string} key Name of key behavior to retrieve binding for
 * @returns {number} Keycode of requested key
 */
function search_keybindings_getKeyBinding(key) {
    try {
        var userKey = search_keybindings_userSettings.get(key);
        console.log("User setting: " + key + " is " + userKey);
        var defaultKey = search_keybindings_defaults.get(key);
    } catch (error) {
        throw "Setting " + key + " not recorded as an option";
    }

    if (userKey != null) {
        return userKey;
    }
    return defaultKey;
}