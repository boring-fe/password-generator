import { BaseGen } from './BaseGen';

export class SymbolsGen extends BaseGen {
  static create() {
    return new SymbolsGen();
  }
  
  chars = '+-_=/;><)(*&^%$#@!,.?|{}[]';

  generate() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}