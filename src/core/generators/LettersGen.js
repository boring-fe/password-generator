import { BaseGen } from './BaseGen';

export class LettersGen extends BaseGen {
  static create() {
    return new LettersGen();
  }
  chars = 'abcdefghijklmnopqrstuvwxyz';
  /**
   * @returns {string} single character
   */
  generate() {
    const index = Math.floor(Math.random() * this.chars.length);
    const symbol = this.chars[index];
    return symbol;
  }
}

export class LettersGenUpperCased extends LettersGen {
  static create() {
    return new LettersGenUpperCased();
  }

  generate() {
    return super.generate().toUpperCase();
  }
}
