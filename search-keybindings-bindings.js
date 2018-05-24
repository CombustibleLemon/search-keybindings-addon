/**
 * Default keybindings, based on Vim
 * @constant
 * @default
 */
var search_keybindings_defaults = new Map([
    ["keyDown", "j"],
    ["keyUp", "k"],
    ["keySearchBar", "/"],
    ["keyEsc", "escape"],
    ["keyHigh", "h"],
    ["keyMiddle", "m"],
    ["keyLow", "l"]
]);

/**
 * User-specified settings
 */
var search_keybindings_userSettings = new Map();

//search_keybindings_defaults_iterator = search_keybindings_defaults.keys();

/**
 * Intended to retrieve settings from storage and record in search_keybindings_userSettings
 */
/*
while (search_keybindings_userSettings.size < search_keybindings_defaults.size) {
    var keyTarget = search_keybindings_defaults_iterator.next().value;
    var keyNum;
    var val;
    val = keyNum || null;
    search_keybindings_userSettings.set(keyTarget, val);
    console.log("Read " + val + " for " + keyTarget);
}
*/

//delete search_keybindings_defaults_iterator;

chrome.storage.local.get(null, function(items) {
    Object.keys(items).forEach(function(objKey, index) {
        var k = items[objKey];
        if (k.enabled) {
            let val = k.key
            console.log("Read " + val + " for " + objKey);
            search_keybindings_userSettings.set(objKey, val);
        } else {
            console.log("Key " + objKey + " disabled");
            search_keybindings_userSettings.set(objKey, -1);
        }

    });
});

/**
 * Retrieves keycode from storage or from defaults if storage is null
 * 
 * @param {string} key Name of key behavior to retrieve binding for
 * @param {boolean} [defaults] True if requesting default, false if requesting user-specified
 * @returns {number} Keycode of requested key
 */
function search_keybindings_getKeyBinding(key, defaults) {
    var userKey = search_keybindings_userSettings.get(key);
    var defaultKey = search_keybindings_defaults.get(key);

    if (defaults !== undefined) {
        if (defaults) {
            return defaultKey;
        } else {
            return userKey;
        }
    }

    if (userKey != null) {
        return userKey;
    }
    return defaultKey;
}