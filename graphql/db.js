 const movies = [
    {
      id: 0,
      name: "Star Wars - The new one",
      score: 1
    },
    {
      id: 1,
      name: "Avengers - The new one",
      score: 8
    },
    {
      id: 2,
      name: "The Godfather I",
      score: 99
    },
    {
      id: 3,
      name: "Logan",
      score: 2
    }
  ];

export const getMovies = () => movies;

export const getById = id => {
     const filteredMovies = movies.filter(movie => String(id) === String(movie.id));
     return filteredMovies[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie =>  String(id) !== String(movie.id));
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        name,
        score,
        id: `${movies.length + 1}`
    };
    movies.push(newMovie);
    return newMovie
}