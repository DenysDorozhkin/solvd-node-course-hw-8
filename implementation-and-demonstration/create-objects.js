import { FictionBook, NonFictionBook } from "../class-design/book.js";
import { User } from "../class-design/user.js";

// Create instances of FictionBook and NonFictionBook.
export const book1 = new FictionBook(
  "Flowers for Algernon",
  "Daniel Keyes",
  1,
  100,
  true,
  "Science fiction"
);
export const book2 = new FictionBook(
  "Brave New World",
  "Aldous Huxley",
  2,
  100,
  true,
  "Science fiction, dystopian fiction"
);
export const book3 = new FictionBook(
  "The End of Eternity",
  "Isaac Asimov",
  3,
  100,
  true,
  "Science fiction"
);
export const book4 = new NonFictionBook(
  "The Demon-Haunted World",
  "Carl Sagan",
  4,
  100,
  true,
  "Science & Technology"
);
export const book5 = new FictionBook(
  "The Butterfly of the Stars",
  "Bernard Werber",
  5,
  100,
  false,
  "Adventure saga, science fiction, philosophical story"
);

// Create instances of User.
export const user1 = new User("John", "john@email.com");
export const user2 = new User("Jane", "jane@email.com");
