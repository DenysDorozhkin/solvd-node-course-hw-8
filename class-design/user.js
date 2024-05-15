// Represents a user with a name, email, and unique user ID.
export class User {
  /*
  Creates an instance of User.
    @param {string} name - The name of the user.
    @param {string} email - The email of the user.
  */
  constructor(name, email) {
    this._name = name;
    this._email = email;
    this._userId = User.getId();
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
  Gets the name of the user.
    @returns {string} - Name of the user.
  */
  get name() {
    return this._name;
  }

  /*
  Sets the name of the user.
    @param {string} value - Name of the user.
  */
  set name(name) {
    if (typeof name !== "string") {
      console.log("Name must be a string.");
      return;
    }
    this._name = name;
  }

  /*
  Gets the email of the user.
    @returns {string} - Email of the user.
  */
  get email() {
    return this._email;
  }

  /*
  Sets the email of the user.
    @param {string} value - Email of the user.
  */
  set email(email) {
    if (typeof email !== "string") {
      console.log("Email must be a string.");
      return;
    }
    this._email = email;
  }

  /*
  Gets the ID of the user.
    @returns {number} - ID of the user.
  */
  get userId() {
    return this._userId;
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
  set isPremium(isPremium) {
    if (typeof isPremium !== "boolean") {
      console.log("IsPremium must be a boolean.");
      return;
    }
    this._isPremium = isPremium;
  }
}
