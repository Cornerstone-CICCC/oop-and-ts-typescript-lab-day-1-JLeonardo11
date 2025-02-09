// 🎟️ Create a Movie Ticket Booking System where users can book tickets and check seat availability.
// 1. Create an enum called MovieGenre with at least 5 movie genres.
// 2. Create a tuple type called Seat which holds (rowLetter: string, seatNumber: number).
// 3. Create a type alias called Movie which contains: movieId (number), title (string), genre (MovieGenre), availableSeats (Seat[]).
// 4. Create a function called addMovie which adds a movie to the movies array. The function needs to return a Movie object.
// 5. Create a function called bookSeat which removes a seat from availableSeats if available. The return needs to be a string.
// 6. Create a function called checkSeatAvailability which returns true if a seat is available and false otherwise.

// 1. Define an enum for MovieGenre.
const MovieGenre = {
  Action: 0,
  Comedy: 1,
  Drama: 2,
  Horror: 3,
  SciFi: 4
};

type Seat = [string, number];

type Movie = {
  movieId: number;
  title: string;
  genre: number; 
  availableSeats: Seat[];
};

const movies: Movie[] = [];

function addMovie(movieId: number, title: string, genre: number, availableSeats: Seat[]): Movie {
  if (genre < 0 || genre > 4) {
    throw new Error("Invalid genre! Choose from: Action, Comedy, Drama, Horror, SciFi.");
  }

  const movie: Movie = { movieId, title, genre, availableSeats };
  movies.push(movie);
  return movie;
}

function getMovieById(movieId: number): Movie | null {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].movieId === movieId) {
      return movies[i];
    }
  }
  return null;
}

function bookSeat(movieId: number, rowLetter: string, seatNumber: number): string {
  const movie = getMovieById(movieId);
  if (!movie) {
    return "Movie not found";
  }

  let seatIndex = -1;
  for (let i = 0; i < movie.availableSeats.length; i++) {
    if (movie.availableSeats[i][0] === rowLetter && movie.availableSeats[i][1] === seatNumber) {
      seatIndex = i;
      break;
    }
  }

  if (seatIndex === -1) {
    return `Seat ${rowLetter}${seatNumber} is not available`;
  }

  movie.availableSeats.splice(seatIndex, 1);
  return `Seat ${rowLetter}${seatNumber} booked successfully`;
}

function checkSeatAvailability(movieId: number, rowLetter: string, seatNumber: number): boolean {
  const movie = getMovieById(movieId);
  if (!movie) {
    return false;
  }

  for (let i = 0; i < movie.availableSeats.length; i++) {
    if (movie.availableSeats[i][0] === rowLetter && movie.availableSeats[i][1] === seatNumber) {
      return true;
    }
  }
  return false;
}


// Test cases (Create more if needed)
console.log(addMovie(1, "Avengers", MovieGenre.Action, [["A", 1], ["A", 2]])) // { movieId: 1, title: "Avengers", genre: MovieGenre.Action, availableSeats: [["A", 1], ["A", 2]] }
console.log(bookSeat(1, "A", 1)) // "Seat A1 booked successfully"
console.log(checkSeatAvailability(1, "A", 1)) // false