// Represents a shopping cart for a user to add and remove books.
export class Cart {
  /*
  Creates an instance of Cart.
    @param {User} user - The user associated with the cart.
  */
  constructor(user) {
    this.user = user;
    this.items = [];
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
    this.items.push(book);
  }

  /*
  Removes a book from the cart.
    @param {Book} book - The book to remove from the cart.
  */
  removeBook(book) {
    const index = this.items.indexOf(book);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  /*
  Calculates the total price of all items in the cart.
    @returns {number} - The total price of all items in the cart.
  */
  calculateTotal() {
    return this.items.reduce((total, book) => total + book.price, 0);
  }
}
