import { Order } from "../class-design/order.js";
import { user1, user2 } from "./create-objects.js";
import { cart1, cart2 } from "./add-books-to-cart.js";

// Create instances of Order.
export const order1 = new Order(user1, cart1.items);
export const order2 = new Order(user2, cart2.items);
