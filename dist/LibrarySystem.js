"use strict";
// 📚 Create a simple Library System where users can add books, borrow books, return books, and check availability.
// 1. Create an enum called BookGenre with at least 5 book genres.
// 2. Create a type alias called Book which contains: bookId (number), title (string), author (string), genre (BookGenre), isAvailable (boolean).
// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
// 4. Create a function called borrowBook which will change the book’s availability to false if available. The return needs to be a string.
// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.
// 7. Create a function called removeBook which will remove a book from the library array. The return needs to be a string.
// 1. Define an enum for BookGenre.
var BookGenre;
(function (BookGenre) {
    BookGenre[BookGenre["Fantasy"] = 0] = "Fantasy";
    BookGenre[BookGenre["Mystery"] = 1] = "Mystery";
    BookGenre[BookGenre["ScienceFiction"] = 2] = "ScienceFiction";
    BookGenre[BookGenre["Romance"] = 3] = "Romance";
    BookGenre[BookGenre["NonFiction"] = 4] = "NonFiction";
})(BookGenre || (BookGenre = {}));
// 3. The library array to store books.
var library = [];
// 4. Function to add a new book.
function addBook(bookId, title, author, genre) {
    if (!(genre in BookGenre)) {
        throw new Error("Invalid genre! Choose from: Fantasy, Mystery, ScienceFiction, Romance, NonFiction.");
    }
    var newBook = { bookId: bookId, title: title, author: author, genre: genre, isAvailable: true };
    library.push(newBook);
    return newBook;
}
// Helper function to find a book by ID.
function getBookById(bookId) {
    return library.find(function (book) { return book.bookId === bookId; }) || null;
}
// 5. Function to borrow a book.
function borrowBook(bookId) {
    var book = getBookById(bookId);
    if (!book)
        return "Book not found";
    if (!book.isAvailable)
        return "".concat(book.title, " is currently not available");
    book.isAvailable = false;
    return "".concat(book.title, " has been borrowed");
}
// 6. Function to return a book.
function returnBook(bookId) {
    var book = getBookById(bookId);
    if (!book)
        return "Book not found";
    book.isAvailable = true;
    return "".concat(book.title, " has been returned");
}
// 7. Function to check book availability.
function checkAvailability(bookId) {
    var book = getBookById(bookId);
    return book ? book.isAvailable : false;
}
// 8. Function to remove a book from the library.
function removeBook(bookId) {
    var index = library.findIndex(function (book) { return book.bookId === bookId; });
    if (index === -1)
        return "Book not found";
    var removedBook = library.splice(index, 1)[0];
    return "".concat(removedBook.title, " has been removed from the library");
}
// ✅ Test cases
console.log(addBook(1, "The Hobbit", "J.R.R. Tolkien", BookGenre.Fantasy));
// { bookId: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genre: Fantasy, isAvailable: true }
console.log(borrowBook(1)); // "The Hobbit has been borrowed"
console.log(checkAvailability(1)); // false
console.log(returnBook(1)); // "The Hobbit has been returned"
console.log(removeBook(1)); // "The Hobbit has been removed from the library"
// Uncomment this to test invalid genre
// console.log(addBook(2, "1984", "George Orwell", "Dystopian" as any)); // Throws Error: Invalid genre!
