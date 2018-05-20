/*
 * This file contains the Map of word --> emoji substitutions.
 */

/* exported sortedEmojiMap */

var search_keybindings_siteMappingDictionary = new Map();
search_keybindings_siteMappingDictionary.set("search-bar", null);
search_keybindings_siteMappingDictionary.set("sr-pane", null);
search_keybindings_siteMappingDictionary.set("sr-hTag", null);
search_keybindings_siteMappingDictionary.set("sr-linkTag", null);

switch (window.location.href.replace(/^(http|https):\/\/.+?\./, '').match(/^([^.]+)/, '')[1].toLowerCase()) {
	case "google":
		console.log("Google detected");
			search_keybindings_siteMappingDictionary.set("search-bar", "lst-ib");
			search_keybindings_siteMappingDictionary.set("sr-pane", "rso");
			search_keybindings_siteMappingDictionary.set("sr-hTag", "h3");
			search_keybindings_siteMappingDictionary.set("sr-linkTag", "a");
	case "bing":
		console.log("Bing detected");
			search_keybindings_siteMappingDictionary.set("search-bar", "sb_form_q");
			search_keybindings_siteMappingDictionary.set("sr-pane", "b_results");
			search_keybindings_siteMappingDictionary.set("sr-hTag", "h2");
			search_keybindings_siteMappingDictionary.set("sr-linkTag", "a");
	case "duckduckgo":
		console.log("DuckDuckGo detected");
			search_keybindings_siteMappingDictionary.set("search-bar", "search_form_input");
			search_keybindings_siteMappingDictionary.set("sr-pane", "links");
			search_keybindings_siteMappingDictionary.set("sr-hTag", "h2");
			search_keybindings_siteMappingDictionary.set("sr-linkTag", "a");
	/* Yahoo has chosen to take all text input as search bar input so this cannot work
	case "yahoo":
		console.log("Yahoo detected");
			search_keybindings_siteMappingDictionary.set("search-bar", "yschsp");
			search_keybindings_siteMappingDictionary.set("sr-pane", "main");
			search_keybindings_siteMappingDictionary.set("sr-hTag", "h3");
			search_keybindings_siteMappingDictionary.set("sr-linkTag", "a");
	*/
	case "baidu":
		console.log("Baidu detected");
			search_keybindings_siteMappingDictionary.set("search-bar", "kw");
			search_keybindings_siteMappingDictionary.set("sr-pane", "content_left");
			search_keybindings_siteMappingDictionary.set("sr-hTag", "h3");
			search_keybindings_siteMappingDictionary.set("sr-linkTag", "a");
	/* GitHub not yet working
	case "github":
		console.log("GitHub detected");
			search_keybindings_siteMappingDictionary.set("search-bar", "search-form");
			search_keybindings_siteMappingDictionary.set("sr-pane", "js-pjax-container");
			search_keybindings_siteMappingDictionary.set("sr-hTag", "h3");
			search_keybindings_siteMappingDictionary.set("sr-linkTag", "a");
	*/
}

