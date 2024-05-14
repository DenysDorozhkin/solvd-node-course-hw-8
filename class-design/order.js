// Represents an order made by a user containing one or more books.
export class Order {
  /*
  Creates an instance of Order.
    @param {User} user - The user who made the order.
    @param {Array<Book>} books - An array of books included in the order.
  */
  constructor(user, books) {
    this.user = user;
    this.books = books;
    this.totalPrice = this.calculateTotalPrice();
  }

  /*
  Calculates the total price of the order based on the prices of the books.
    @returns {number} - The total price of the order.
  */
  calculateTotalPrice() {
    return this.books.reduce((total, book) => total + book.price, 0);
  }

  // Applies a discount to the total price if the user is premium.
  applyDiscount() {
    if (this.user.isPremium) {
      this.totalPrice *= 0.9;
    }
  }
}
