var search_keybindings_defaults = new Map();
search_keybindings_defaults.set("keyDown", 74);
search_keybindings_defaults.set("keyUp", 75);
search_keybindings_defaults.set("keySearchBar", 191);
search_keybindings_defaults.set("keyEsc", 27);
search_keybindings_defaults.set("keyHigh", 72);
search_keybindings_defaults.set("keyMiddle", 78);
search_keybindings_defaults.set("keyLow", 76);

var search_keybindings_userSettings = new Map();

/*
for (i = 0; i < search_keybindings_defaults.size; i++) {
    let keyName = search_keybindings_defaults[i].
}
*/

//for (var key in search_keybindings_defaults) {
//Object.keys(search_keybindings_defaults).forEach(function(key) {
search_keybindings_defaults_iterator = search_keybindings_defaults.keys();

while (search_keybindings_userSettings.size < search_keybindings_defaults.size) {
    let key = search_keybindings_defaults_iterator.next().value;
    let val = chrome.storage.local.get(key) || null;
    search_keybindings_userSettings.set(key, val);
    console.log("Read " + val + " for " + key);
}

console.log(delete search_keybindings_defaults_iterator);

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