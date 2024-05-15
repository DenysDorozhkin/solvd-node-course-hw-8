// Represents a Bookstore with a collection of books.
class Bookstore {
  /*
  Creates an instance of Bookstore.
    @param {Array<Book>} books - An array of books in the bookstore.
  */
  constructor(books) {
    this._books = books;
  }

  /*
  Gets the books of the bookstore.
    @returns {array<Book>} - Books of the bookstore.
  */
  get books() {
    return this._books;
  }

  /*
  Sets the books of the bookstore.
    @param {array<Book>} value - Books of the bookstore.
  */
  set books(books) {
    if (!Array.isArray(books)) {
      console.log("Books must be an array.");
      return;
    }
    this._books = books;
  }

  /*
  Searches for books in the bookstore based on the provided criteria.
    @param {string} criteria - The search criteria.
    @returns {Array<Book>} - An array of books matching the search criteria.
  */
  searchBooks(criteria) {
    return this._books.filter((book) => {
      return Object.values(book).some((value) => {
        if (
          typeof value === "string" &&
          value.toLowerCase().includes(criteria.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    });
  }
}
