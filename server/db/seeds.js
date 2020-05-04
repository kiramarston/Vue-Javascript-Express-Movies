use films_hub;
db.dropDatabase();

db.films.insertMany([
  {
    title: "A horror movie",
    genre: "Horror",
    rating: "15",
    releaseDate: "A date",
    runTime: "A runtime",
    crew: {
      director: "A director",
      producer: "A producer"
    }
  },
  {
    title: "An action movie",
    genre: "Action",
    rating: "12A",
    releaseDate: "A date",
    runTime: "A runtime",
    crew: {
      director: "A director",
      producer: "A producer"
    }
  },
  {
    title: "A romcom movie",
    genre: "Romantic Comedy",
    rating: "12A",
    releaseDate: "A date",
    runTime: "A runtime",
    crew: {
      director: "A director",
      producer: "A producer"
    }
  },
  {
    title: "A thriller movie",
    genre: "Thriller",
    rating: "18",
    releaseDate: "A date",
    runTime: "A runtime",
    crew: {
      director: "A director",
      producer: "A producer"
    }
  }
]);
