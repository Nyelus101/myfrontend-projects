async function fetchMoviesBadStatus() {
    const response = await fetch('/oops');
  
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
  
    const movies = await response.json();
    return movies;
  }
  
  fetchMoviesBadStatus().catch(error => {
    error.message; // 'An error has occurred: 404'
  });

var dim = fetchMoviesBadStatus();
document.getElementById("demo").innerHTML = dim;