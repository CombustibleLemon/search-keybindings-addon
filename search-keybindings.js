/**
 * Array of link elements in DOM that make up main search results
 */
var search_keybindings_resultLinks = []
var search_keybindings_currentIndex = -1
var search_keybindings_searchBar

console.log('Search_Keybindings initialized')

function selectResult (resultNum) {
  search_keybindings_resultLinks[resultNum].focus()
}

/**
 * Activate preceding search result. Does nothing if currently at top.
 */
function moveUp () {
  if (search_keybindings_currentIndex <= 0) {
    console.log('└ EOL')
    return
  }
  console.log('│ current index is ' + search_keybindings_currentIndex)
  search_keybindings_currentIndex--
  console.log('└ targeting ' + search_keybindings_currentIndex)
  selectResult(search_keybindings_currentIndex)
}

/**
 * Activate following search result. Does nothing if currently at bottom.
 */
function moveDown () {
  if (search_keybindings_currentIndex >= search_keybindings_resultLinks.length - 1) {
    console.log('└ EOL')
    return
  }

  console.log('│ current index is ' + search_keybindings_currentIndex)
  search_keybindings_currentIndex++
  console.log('└ targeting ' + search_keybindings_currentIndex)
  selectResult(search_keybindings_currentIndex)
}

/**
 * Activate top search result.
 */
function moveHigh () {
  console.log('│ current index is ' + search_keybindings_currentIndex)
  search_keybindings_currentIndex = 0
  console.log('└ targeting ' + search_keybindings_currentIndex)
  selectResult(search_keybindings_currentIndex)
}

/**
 * Activate search result midway between bottom and top.
 */
function moveMiddle () {
  console.log('│ current index is ' + search_keybindings_currentIndex)
  var mid = Math.floor(search_keybindings_resultLinks.length / 2)

  search_keybindings_currentIndex = mid
  console.log('└ targeting ' + search_keybindings_currentIndex)
  selectResult(search_keybindings_currentIndex)
}

/**
 * Activate bottom search result.
 */
function moveLow () {
  console.log('│ current index is ' + search_keybindings_currentIndex)
  search_keybindings_currentIndex = search_keybindings_resultLinks.length - 1
  console.log('└ targeting ' + search_keybindings_currentIndex)
  selectResult(search_keybindings_currentIndex)
}

/**
 * Activate search bar for text entry.
 */
function selectSearchBar () {
  search_keybindings_searchBar.focus()
  console.log('└ targeting search bar')
}

/*
function escapeSearchBar() {
	selectResult(search_keybindings_currentIndex);
	console.log("└ exiting search bar");
}
*/

window.addEventListener('keydown', checkKeyPressed, false)

/**
 * Identifies keycode of pressed key and runs specified procedure
 * @param {Event} e Keydown event
 */
function checkKeyPressed (e) {
  console.log(e.key + ' key pressed.')

  let ae = document.activeElement
  console.log('│ Current active element is:')
  console.log(ae)
  let loc = search_keybindings_resultLinks.indexOf(ae)
  if (loc >= 0) {
    search_keybindings_currentIndex = loc
  } else if (ae.isSameNode(search_keybindings_searchBar)) {
    console.log('└ Search bar active, exiting.')
    return
  }

  /**
     * Determines which key procedure to run
     */
  switch (e.key.toLowerCase()) {
    case search_keybindings_getKeyBinding('keyDown'):
      console.log('│ Key matches down key.')
      e.preventDefault()
      moveDown()
      break
    case search_keybindings_getKeyBinding('keyUp'):
      console.log('│ Key matches up key.')
      e.preventDefault()
      moveUp()
      break
    case search_keybindings_getKeyBinding('keySearchBar'):
      console.log('│ Key matches search key.')
      e.preventDefault()
      selectSearchBar()
      break
      /*
                  case search_keybindings_getKeyBinding("keyEsc"):
                  	console.log("│ Key matches escape key.");
                cleanEvent(e);
                  	escapeSearchBar();
                  	break;
                  */
    case search_keybindings_getKeyBinding('keyHigh'):
      console.log('│ Key matches high key.')
      e.preventDefault()
      moveHigh()
      break
    case search_keybindings_getKeyBinding('keyMiddle'):
      console.log('│ Key matches middle key.')
      e.preventDefault()
      moveMiddle()
      break
    case search_keybindings_getKeyBinding('keyLow'):
      console.log('│ Key matches low key.')
      e.preventDefault()
      moveLow()
      break
  }
}

/**
 * Test if an element in the HTML DOM is visible
 * @param {Node} obj A DOM element tested for visibility
 */
/*
function isVisible(obj) {
    if (obj == document) return true
    
    if (!obj) return false

    if (!obj.parentNode) return false
    
    if (obj.style) {
        if (obj.style.display == 'none') return false
        if (obj.style.visibility == 'hidden') return false
    }

    //Try the computed style in a standard way
    if (window.getComputedStyle) {
        var style = window.getComputedStyle(obj, "")

        if (style.display == 'none') return false
        if (style.visibility == 'hidden') return false
    }

    //Or get the computed style using IE's silly proprietary way
    var style = obj.currentStyle

    if (style) {
        if (style['display'] == 'none') return false
        if (style['visibility'] == 'hidden') return false
    }

    return isVisible(obj.parentNode)
}
*/

/*
document.addEventListener("DOMContentLoaded", indexResults()) {
    console.log("DOM fully loaded and parsed");
});
*/
{
  let resultListPane = document.getElementById(search_keybindings_siteMappingDictionary.get('sr-pane'))
  let resultList = resultListPane.getElementsByTagName(search_keybindings_siteMappingDictionary.get('sr-hTag'))

  for (var i = 0, len = resultList.length; i < len; i++) {
      var 
	    if (resultList[i].getElementsByTagName(search_keybindings_siteMappingDictionary.get('sr-linkTag'))[0]) {
        	search_keybindings_resultLinks.push(resultList[i].getElementsByTagName(search_keybindings_siteMappingDictionary.get('sr-linkTag'))[0])
	    }
  }

  console.log(search_keybindings_resultLinks)
  search_keybindings_searchBar = document.getElementById(search_keybindings_siteMappingDictionary.get('search-bar'))
}
