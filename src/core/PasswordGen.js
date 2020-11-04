import { BaseGen } from './generators';

export class PasswordGen extends BaseGen {
  static create(length, strategies) {
    return new PasswordGen(length, strategies)
  }
  /**
   * 
   * @param {number} length 
   * @param {Array<BaseGen>} strategies 
   */
  constructor(length, strategies) {
    super();
    this.length = length;
    this.strategies = strategies;
  }

  generate() {
    let password = '';
    while(password.length < this.length) {
      const strategy = this.strategies[this.getRandomIndex()];
      const char = strategy.generate();
      password += char;
    }

    return password;
  }

  /**
   * @private
   * @returns {number}
   */
  getRandomIndex() {
    return Math.floor(Math.random() * this.strategies.length);
  }
}