import { User } from "./user.js";
// Represents an order made by a user containing one or more books.
export class Order {
  /*
  Creates an instance of Order.
    @param {User} user - The user who made the order.
    @param {Array<Book>} books - An array of books included in the order.
  */
  constructor(user, books) {
    this._user = user;
    this._books = books;
    this._totalPrice = this.calculateTotalPrice();
  }

  /*
  Gets the user of the order.
    @returns {User} - User of the order.
  */
  get user() {
    return this._user;
  }

  /*
  Sets the user of the order.
    @param {User} value - User of the order.
  */
  set user(user) {
    if (!user instanceof User) {
      console.log("User must be instance of User.");
      return;
    }
    this._user = user;
  }

  /*
  Gets the books of the order.
    @returns {array<Book>} - Books of the order.
  */
  get books() {
    return this._books;
  }

  /*
  Sets the books of the order.
    @param {array<Book>} value - Books of the order.
  */
  set books(books) {
    if (!Array.isArray(books)) {
      console.log("Books must be an array.");
      return;
    }
    if (books.length === 0) {
      console.log("Books array must be not empty.");
      return;
    }
    this._books = books;
  }

  /*
  Gets the totalPrice of the order.
    @returns {number} - Total price of the order.
  */
  get totalPrice() {
    return this._totalPrice;
  }

  /*
  Calculates the total price of the order based on the prices of the books.
    @returns {number} - The total price of the order.
  */
  calculateTotalPrice() {
    return this._books.reduce((total, book) => total + book.price, 0);
  }

  // Applies a discount to the total price if the user is premium.
  applyDiscount() {
    if (this._user.isPremium) {
      this._totalPrice *= 0.9;
    }
  }
}
