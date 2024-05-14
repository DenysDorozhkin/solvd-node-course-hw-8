import { Cart } from "../class-design/cart.js";
import {
  book1,
  book2,
  book3,
  book4,
  book5,
  user1,
  user2,
} from "./create-objects.js";

// Create instances of Cart.
export const cart1 = new Cart(user1);
export const cart2 = new Cart(user2);

// Add books to cart1.
cart1.addBook(book1);
cart1.addBook(book2);
cart1.addBook(book3);

// Add books to cart1.
cart2.addBook(book4);
cart2.addBook(book5);
