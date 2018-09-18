(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');
     var searchTerm = getQueryVariable('query')

    if (results.length) { // Are there any results?
      var appendString = '<li>Your search for <b>"'+searchTerm+'"</b> returned '+results.length+' results</li>';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
        appendString += '<p>' + item.content.substring(0, 300) + '...</p></li>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }
  
  var searchTerm = getQueryVariable('query');
  if (searchTerm) {
      document.getElementById('search-box').setAttribute("value", searchTerm);
      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, PAGES); // We'll write this in the next section
    }
  
})();
function getAutoCompleteSearchResults(results, store) {

  var suggestions = [];
  if (results.length) { // Are there any results?
    for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];    
        suggestions.push(item.content.substring(0, 300));
    }      
  } 
  return suggestions;
}

 