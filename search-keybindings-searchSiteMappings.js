var search_keybindings_siteMappingDictionary = new Map();
search_keybindings_siteMappingDictionary.set("search-bar-id", null);
search_keybindings_siteMappingDictionary.set("search-bar-name", null);
search_keybindings_siteMappingDictionary.set("sr-pane", null);
search_keybindings_siteMappingDictionary.set("sr-hTag", null);
search_keybindings_siteMappingDictionary.set("sr-linkTag", null);

switch (window.location.href.replace(/^(http|https):\/\/.+?\./, '').match(/^([^.]+)/, '')[1].toLowerCase()) {
    case "google":
        console.log("Google detected");
        search_keybindings_siteMappingDictionary.set("search-bar-name", "q");
        search_keybindings_siteMappingDictionary.set("sr-pane", "rso");
        search_keybindings_siteMappingDictionary.set("sr-hTag", "h3");
        search_keybindings_siteMappingDictionary.set("sr-linkTag", "a");
        break;

    
    case "bing":
        console.log("Bing detected");
        search_keybindings_siteMappingDictionary.set("search-bar-id", "sb_form_q");
        search_keybindings_siteMappingDictionary.set("sr-pane", "b_results");
        search_keybindings_siteMappingDictionary.set("sr-hTag", "h2");
        search_keybindings_siteMappingDictionary.set("sr-linkTag", "a");
        break;

    case "duckduckgo":
        console.log("DuckDuckGo detected");
        search_keybindings_siteMappingDictionary.set("search-bar-id", "search_form_input");
        search_keybindings_siteMappingDictionary.set("sr-pane", "links");
        search_keybindings_siteMappingDictionary.set("sr-hTag", "h2");
        search_keybindings_siteMappingDictionary.set("sr-linkTag", "a");
        break;

    // Yahoo has chosen to take all text input as search bar input so this cannot work
    /*
    case "yahoo":
        console.log("Yahoo detected");
            search_keybindings_siteMappingDictionary.set("search-bar-id", "yschsp");
            search_keybindings_siteMappingDictionary.set("sr-pane", "main");
            search_keybindings_siteMappingDictionary.set("sr-hTag", "h3");
            search_keybindings_siteMappingDictionary.set("sr-linkTag", "a");
            break;
    */
            
    case "baidu":
        console.log("Baidu detected");
        search_keybindings_siteMappingDictionary.set("search-bar-id", "kw");
        search_keybindings_siteMappingDictionary.set("sr-pane", "content_left");
        search_keybindings_siteMappingDictionary.set("sr-hTag", "h3");
        search_keybindings_siteMappingDictionary.set("sr-linkTag", "a");
        break;

    // GitHub not yet working
    /*
    case "github":
        console.log("GitHub detected");
            search_keybindings_siteMappingDictionary.set("search-bar-id", "search-form");
            search_keybindings_siteMappingDictionary.set("sr-pane", "js-pjax-container");
            search_keybindings_siteMappingDictionary.set("sr-hTag", "h3");
            search_keybindings_siteMappingDictionary.set("sr-linkTag", "a");
            break;
    */
}