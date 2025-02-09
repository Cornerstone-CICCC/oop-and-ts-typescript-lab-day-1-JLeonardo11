// 📚 Create a simple Library System where users can add books, borrow books, return books, and check availability.
// 1. Create an enum called BookGenre with at least 5 book genres.
// 2. Create a type alias called Book which contains: bookId (number), title (string), author (string), genre (BookGenre), isAvailable (boolean).
// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
// 4. Create a function called borrowBook which will change the book’s availability to false if available. The return needs to be a string.
// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.
// 7. Create a function called removeBook which will remove a book from the library array. The return needs to be a string.

enum BookGenre {
  Fantasy,
  Mystery,
  ScienceFiction,
  Romance,
  NonFiction
}

type Book = {
  bookId: number;
  title: string;
  author: string;
  genre: BookGenre;
  isAvailable: boolean;
};

const library: Book[] = [];

function addBook(bookId: number, title: string, author: string, genre: BookGenre): Book {
  if (!(genre in BookGenre)) {
    throw new Error("Invalid genre! Choose from: Fantasy, Mystery, ScienceFiction, Romance, NonFiction.");
  }

  const newBook: Book = { bookId, title, author, genre, isAvailable: true };
  library.push(newBook);
  return newBook;
}

function getBookById(bookId: number): Book | null {
  return library.find((book) => book.bookId === bookId) || null;
}

function borrowBook(bookId: number): string {
  const book = getBookById(bookId);
  if (!book) return "Book not found";
  if (!book.isAvailable) return `${book.title} is currently not available`;

  book.isAvailable = false;
  return `${book.title} has been borrowed`;
}

function returnBook(bookId: number): string {
  const book = getBookById(bookId);
  if (!book) return "Book not found";

  book.isAvailable = true;
  return `${book.title} has been returned`;
}

function checkAvailability(bookId: number): boolean {
  const book = getBookById(bookId);
  return book ? book.isAvailable : false;
}

function removeBook(bookId: number): string {
  const index = library.findIndex((book) => book.bookId === bookId);
  if (index === -1) return "Book not found";

  const removedBook = library.splice(index, 1)[0];
  return `${removedBook.title} has been removed from the library`;
}

//Test cases
console.log(addBook(1, "The Hobbit", "J.R.R. Tolkien", BookGenre.Fantasy)); 
console.log(borrowBook(1)); // "The Hobbit has been borrowed"
console.log(checkAvailability(1)); // false
console.log(returnBook(1)); // "The Hobbit has been returned"
console.log(removeBook(1)); // "The Hobbit has been removed from the library"
