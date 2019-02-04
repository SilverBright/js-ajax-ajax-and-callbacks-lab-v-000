$(document).ready(function (){
});

function searchRepositories(){
  const searchTerms = $('#searchTerms').val();
  const uri = 'https://api.github.com/search/repositories?q=' + searchTerms
  $.get(uri, function(data) {
        console.log(data.items)
        $('#results').html(renderSearchResults(data.items))
    }).fail(function(error) {displayError(error)})
};