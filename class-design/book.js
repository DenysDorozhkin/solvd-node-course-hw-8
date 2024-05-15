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
    this._title = title;
    this._author = author;
    this._isbn = isbn;
    this._price = price;
    this._availability = availability;
  }

  /*
  Gets the title of the book.
    @returns {string} - Title of the book.
  */
  get title() {
    return this._title;
  }

  /*
  Sets the title of the book.
    @param {string} value - Title of the book.
  */
  set title(title) {
    if (typeof title !== "string") {
      console.log("Title must be a string.");
      return;
    }
    this._title = title;
  }

  /*
  Gets the author of the book.
    @returns {string} - Author of the book.
  */
  get author() {
    return this._author;
  }

  /*
  Sets the author of the book.
    @param {string} value - Author of the book.
  */
  set author(author) {
    if (typeof author !== "string") {
      console.log("Author must be a string.");
      return;
    }
    this._author = author;
  }

  /*
  Gets the ISBN of the book.
    @returns {number} - ISBN of the book.
  */
  get isbn() {
    return this._isbn;
  }

  /*
  Sets the ISBN of the book.
    @param {number} value - ISBN of the book.
  */
  set isbn(isbn) {
    if (typeof isbn !== "number") {
      console.log("ISBN must be a number.");
      return;
    }
    this._isbn = isbn;
  }

  /*
  Gets the price of the book.
    @returns {number} - Price of the book.
  */
  get price() {
    return this._price;
  }

  /*
  Sets the price of the book.
    @param {number} value - Price of the book.
  */
  set price(price) {
    if (typeof price !== "number") {
      console.log("Price must be a number.");
      return;
    }
    this._price = price;
  }

  /*
  Gets the availability of the book.
    @returns {boolean} - Availability of the book.
  */
  get availability() {
    return this._availability;
  }

  /*
  Sets the availability of the book.
    @param {boolean} value - Availability of the book.
  */
  set availability(availability) {
    if (typeof availability !== "boolean") {
      console.log("Availability must be a boolean.");
      return;
    }
    this._availability = availability;
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
    this._genre = genre;
  }

  /*
  Gets the genre of the book.
    @returns {string} - Genre of the book.
  */
  get genre() {
    return this._genre;
  }

  /*
  Sets the genre of the book.
    @param {string} value - Genre of the book.
  */
  set genre(genre) {
    if (typeof genre !== "string") {
      console.log("Genre must be a string.");
      return;
    }
    this._genre = genre;
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
    this._category = category;
  }

  /*
  Gets the category of the book.
    @returns {string} - Category of the book.
  */
  get category() {
    return this._category;
  }

  /*
  Sets the category of the book.
    @param {string} value - Category of the book.
  */
  set category(category) {
    if (typeof category !== "string") {
      console.log("Category must be a string.");
      return;
    }
    this._category = category;
  }
}
