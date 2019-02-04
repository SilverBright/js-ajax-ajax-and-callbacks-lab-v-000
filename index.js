$(document).ready(function (){
});

function searchRepositories(){
  const searchTerms = $('#searchTerms').val();
  const uri = 'https://api.github.com/search/repositories?q=' + searchTerms
}