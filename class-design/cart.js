import { User } from "./user.js";
// Represents a shopping cart for a user to add and remove books.
export class Cart {
  /*
  Creates an instance of Cart.
    @param {User} user - The user associated with the cart.
  */
  constructor(user) {
    this._user = user;
    this._items = [];
  }

  /*
  Gets the user of the cart.
    @returns {User} - User of the cart.
  */
  get user() {
    return this._user;
  }

  /*
  Sets the user of the cart.
    @param {User} value - User of the cart.
  */
  set user(user) {
    if (!user instanceof User) {
      console.log("User must be instance of User.");
      return;
    }
    this._user = user;
  }

  /*
  Gets the books of the cart.
    @returns {array<Book>} - Books of the cart.
  */
  get items() {
    return this._items;
  }

  /*
  Adds a book to the cart.
    @param {Book} book - The book to add to the cart (if the book is out of stock, it does not add it and log a message about it).
  */
  addBook(book) {
    if (!book.availability) {
      console.log(`${book.title} is not available now!`);
      return;
    }
    this._items.push(book);
  }

  /*
  Removes a book from the cart.
    @param {Book} book - The book to remove from the cart.
  */
  removeBook(book) {
    const index = this._items.indexOf(book);
    if (index !== -1) {
      this._items.splice(index, 1);
    }
  }

  /*
  Calculates the total price of all items in the cart.
    @returns {number} - The total price of all items in the cart.
  */
  calculateTotal() {
    return this._items.reduce((total, book) => total + book.price, 0);
  }
}
