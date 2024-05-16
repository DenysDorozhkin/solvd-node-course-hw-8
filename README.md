<h3 align="center">Online bookstore</h3>

---

<p align="center"> Online bookstore with basic classes.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Classes](#classes)
- [Interaction between Objects](#interaction_between_objects)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This JavaScript project presents a bookstore management system consisting of classes for books, users, carts, orders, and the bookstore itself. Each class serves a specific purpose, such as managing book data, handling user interactions, and processing orders. With clear documentation and practical usage examples, this system simplifies the implementation of essential bookstore functionalities, offering flexibility for customization and seamless integration into various applications.

## 🏁 Getting Started <a name = "getting_started"></a>

```
git clone https://github.com/DenysDorozhkin/solvd-node-course-hw-8.git
```

```
cd solvd-node-course-hw-8
```

```
npm start
```

## 🔧 Classes <a name = "classes"></a>

1. Book

   Purpose: Represents a generic book.

   Properties:

   - \_title: Title of the book.
   - \_author: Author of the book.
   - \_isbn: ISBN (International Standard Book Number) of the book.
   - \_price: Price of the book.
   - \_availability: Availability status of the book

   Methods:

   - constructor(title, author, isbn, price, availability): Initializes a new Book instance.
   - get title(), set title(title): Accessor and mutator for the title property.
   - get author(), set author(author): Accessor and mutator for the author property.
   - get isbn(), set isbn(isbn): Accessor and mutator for the isbn property.
   - get price(), set price(price): Accessor and mutator for the price property.
   - get availability(), set availability(availability): Accessor and mutator for the availability property.

2. FictionBook

   Purpose: Represents a fiction book, extending the Book class.

   Additional Property:

   - \_genre: Genre of the fiction book.

   Additional Methods:

   - get genre(), set genre(genre): Accessor and mutator for the genre property.

3. NonFictionBook

   Purpose: Represents a non-fiction book, extending the Book class.

   Additional Property:

   - \_category: Category of the non-fiction book.

   Additional Methods:

   - get category(), set category(category): Accessor and mutator for the category property.

4. Bookstore

   Purpose: Represents a bookstore.

   Properties:

   - \_books: Array of books available in the bookstore.

   Methods:

   - constructor(books): Initializes a new Bookstore instance.
   - get books(), set books(books): Accessor and mutator for the books property.
   - searchBooks(criteria): Searches for books in the bookstore based on a given criteria.

5. User

   Purpose: Represents a user of the bookstore.

   Properties:

   - \_name: Name of the user.
   - \_email: Email address of the user.
   - \_userId: Unique identifier of the user.
   - \_isPremium: Indicates whether the user is a premium member.

   Methods:

   - constructor(name, email): Initializes a new User instance.
   - get name(), set name(name): Accessor and mutator for the name property.
   - get email(), set email(email): Accessor and mutator for the email property.
   - get userId(): Accessor for the userId property.
   - get isPremium(), set isPremium(isPremium): Accessor and mutator for the isPremium property.

6. Cart

   Purpose: Represents a shopping cart for a user.

   Properties:

   - \_user: User associated with the shopping cart.
   - \_items: Array of books added to the shopping cart.

   Methods:

   - constructor(user): Initializes a new Cart instance.
   - get user(), set user(user): Accessor and mutator for the user property.
   - get items(): Accessor for the items property.
   - addBook(book): Adds a book to the shopping cart.
   - removeBook(book): Removes a book from the shopping cart.
   - calculateTotal(): Calculates the total price of all items in the shopping cart.

7. Order

   Purpose: Represents an order placed by a user.

   Properties:

   - \_user: User who placed the order.
   - \_books: Array of books included in the order.
   - \_totalPrice: Total price of the order.

   Methods:

   - constructor(user, books): Initializes a new Order instance.
   - get user(), set user(user): Accessor and mutator for the user property.
   - get books(), set books(books): Accessor and mutator for the books property.
   - get totalPrice(): Accessor for the totalPrice property.
   - calculateTotalPrice(): Calculates the total price of the order.
   - applyDiscount(): Applies a discount to the total price if the user is a premium member.

## 🚀 Interaction between Objects <a name = "interaction_between_objects"></a>

- Users can interact with the system by adding books to their shopping cart, removing books, and placing orders.
- The Bookstore class manages the inventory of books and allows users to search for books based on criteria.
- Users can be regular or premium members, and premium members receive discounts on their orders.
- Each book has properties such as title, author, price, and availability.
- Books can be either fiction or non-fiction, each with additional properties such as genre or category.

## 🎈 Usage <a name = "usage"></a>

```
// Creating books
const book1 = new FictionBook("Title1", "Author1", 1234567890, 20, true, "Fantasy");
const book2 = new NonFictionBook("Title2", "Author2", 9876543210, 25, true, "Science");

// Creating a user
const user1 = new User("John Doe", "john@example.com");

// Creating a shopping cart
const cart = new Cart(user1);

// Adding books to the cart
cart.addBook(book1);
cart.addBook(book2);

// Calculating total price
const totalPrice = cart.calculateTotal();

// Creating an order
const order = new Order(user1, cart.items);

// Applying discount for premium user
user1.isPremium = true;
order.applyDiscount();

// Calculating total price after discount
const finalPrice = order.totalPrice;
```

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - App Environment

## ✍️ Authors <a name = "authors"></a>

- https://github.com/DenysDorozhkin
