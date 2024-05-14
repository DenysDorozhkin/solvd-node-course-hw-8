// Represents a user with a name, email, and unique user ID.
export class User {
  /*
  Creates an instance of User.
    @param {string} name - The name of the user.
    @param {string} email - The email of the user.
  */
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.userId = User.getId();
    this._isPremium = false;
  }

  // Static property to keep track of the next available user ID. Initialized to 0.
  static id = 0;

  /*
  Generates and returns a unique user ID. Increments the static id property for each new user.
    @returns {number} - The generated user ID.
  */
  static getId() {
    return User.id++;
  }

  /*
  Gets the premium status of the user.
    @returns {boolean} - True if the user is premium, false otherwise.
  */
  get isPremium() {
    return this._isPremium;
  }

  /*
  Sets the premium status of the user.
    @param {boolean} value - The premium status to set.
  */
  set isPremium(boolean) {
    this._isPremium = boolean;
  }
}
