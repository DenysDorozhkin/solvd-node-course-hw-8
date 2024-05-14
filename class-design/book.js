// Represents a book with basic properties like title, author, ISBN, price, and availability.
export class Book {
  /*
  Creates an instance of Book.
    @param {string} title - The title of the book.
    @param {string} author - The author of the book.
    @param {string} isbn - The ISBN (International Standard Book Number) of the book.
    @param {number} price - The price of the book.
    @param {boolean} availability - The availability status of the book.
  */
  constructor(title, author, isbn, price, availability) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.price = price;
    this.availability = availability;
  }
}

// Represents a fiction book, extending the base Book class.
export class FictionBook extends Book {
  /*
  Creates an instance of FictionBook.
    @param {string} title - The title of the book.
    @param {string} author - The author of the book.
    @param {string} isbn - The ISBN (International Standard Book Number) of the book.
    @param {number} price - The price of the book.
    @param {boolean} availability - The availability status of the book.
    @param {string} genre - The genre of the fiction book.
  */
  constructor(title, author, isbn, price, availability, genre) {
    super(title, author, isbn, price, availability);
    this.genre = genre;
  }
}

// Represents a non-fiction book, extending the base Book class.
export class NonFictionBook extends Book {
  /*
  Creates an instance of NonFictionBook.
    @param {string} title - The title of the book.
    @param {string} author - The author of the book.
    @param {string} isbn - The ISBN (International Standard Book Number) of the book.
    @param {number} price - The price of the book.
    @param {boolean} availability - The availability status of the book.
    @param {string} category - The category of the non-fiction book.
  */
  constructor(title, author, isbn, price, availability, category) {
    super(title, author, isbn, price, availability);
    this.category = category;
  }
}
