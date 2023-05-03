$.get('https://swapi-api.alx-tools.com/api/films/?format=json', function(data) {
  let movies = data.results;
  let list = $('#list_movies');
  for (let i = 0; i < movies.length; i++) {
    let title = movies[i].title;
    list.append('<li>' + title + '</li>');
  }
});
