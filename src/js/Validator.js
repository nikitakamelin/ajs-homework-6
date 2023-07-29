export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return /^[^-_0-9]+[\w-]{0,3}[^-_0-9]+$/gi.test(this.name);
  }
}
