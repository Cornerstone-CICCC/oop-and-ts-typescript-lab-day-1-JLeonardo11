// 📚 Create a simple Library System where users can add books, borrow books, return books, and check availability.
// 1. Create an enum called BookGenre with at least 5 book genres.
// 2. Create a type alias called Book which contains: bookId (number), title (string), author (string), genre (BookGenre), isAvailable (boolean).
// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
// 4. Create a function called borrowBook which will change the book’s availability to false if available. The return needs to be a string.
// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.
// 7. Create a function called removeBook which will remove a book from the library array. The return needs to be a string.

var BookGenre = {
  Fantasy: 0,
  Mystery: 1,
  ScienceFiction: 2,
  Romance: 3,
  NonFiction: 4
};

// 2. Create a type alias called Book which contains: bookId (number), title (string), author (string), genre (BookGenre), isAvailable (boolean).
type Book = {
  bookId: number;
  title: string;
  author: string;
  genre: number; // Use numeric value for BookGenre
  isAvailable: boolean;
};

var library: Book[] = [];

// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
function addBook(bookId: number, title: string, author: string, genre: number): Book {
  if (genre < 0 || genre > 4) {
    throw new Error("Invalid genre! Choose from: Fantasy, Mystery, ScienceFiction, Romance, NonFiction.");
  }

  var newBook: Book = { bookId: bookId, title: title, author: author, genre: genre, isAvailable: true };
  library.push(newBook);
  return newBook;
}

// 4. Create a function called borrowBook which will change the book’s availability to false if available. The return needs to be a string.
function borrowBook(bookId: number): string {
  var book = getBookById(bookId);
  if (!book) return "Book not found";
  if (!book.isAvailable) return book.title + " is currently not available";

  book.isAvailable = false;
  return book.title + " has been borrowed";
}

// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
function returnBook(bookId: number): string {
  var book = getBookById(bookId);
  if (!book) return "Book not found";

  book.isAvailable = true;
  return book.title + " has been returned";
}

// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.
function checkAvailability(bookId: number): boolean {
  var book = getBookById(bookId);
  return book ? book.isAvailable : false;
}

// 7. Create a function called removeBook which will remove a book from the library array. The return needs to be a string.
function removeBook(bookId: number): string {
  var index = -1;
  for (var i = 0; i < library.length; i++) {
    if (library[i].bookId === bookId) {
      index = i;
      break;
    }
  }
  
  if (index === -1) return "Book not found";

  var removedBook = library.splice(index, 1)[0];
  return removedBook.title + " has been removed from the library";
}

// Helper function to get a book by its ID
function getBookById(bookId: number): Book | null {
  for (var i = 0; i < library.length; i++) {
    if (library[i].bookId === bookId) {
      return library[i];
    }
  }
  return null;
}

//Test cases
console.log(addBook(1, "The Hobbit", "J.R.R. Tolkien", BookGenre.Fantasy)); 
console.log(borrowBook(1)); // "The Hobbit has been borrowed"
console.log(checkAvailability(1)); // false
console.log(returnBook(1)); // "The Hobbit has been returned"
console.log(removeBook(1)); // "The Hobbit has been removed from the library"
