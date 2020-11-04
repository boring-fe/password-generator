import { BaseGen } from './BaseGen';

export class NumbersGen extends BaseGen {
  static create() {
    return new NumbersGen();
  }

  generate() {
    return Math.floor(Math.random() * 10);
  }
}
