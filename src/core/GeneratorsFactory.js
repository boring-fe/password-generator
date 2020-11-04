import { LettersGen, LettersGenUpperCased, NumbersGen, SymbolsGen } from './generators';
import { PasswordGen } from './PasswordGen';

export const STRATEGIES_NAME = {
  NUMBERS: 'NUMBERS',
  LETTERS: 'LETTERS',
  SYMBOLS: 'SYMBOLS',
  LETTERS_UPPER: 'LETTERS_UPPER'
}

const STRATEGY_TO_GENERATORS_MAP = {
  [STRATEGIES_NAME.NUMBERS]: NumbersGen,
  [STRATEGIES_NAME.LETTERS]: LettersGen,
  [STRATEGIES_NAME.SYMBOLS]: SymbolsGen,
  [STRATEGIES_NAME.LETTERS_UPPER]: LettersGenUpperCased,
}

export class GeneratorsFactory {
  static create(length,  strategies) {
    return new GeneratorsFactory(length, strategies);
  }

  /**
   * Map<string, <BaseGen>>
   */
  strategyInstance = new Map();

  constructor(length, strategyNames) {
    this.length = length;
    this.strategyNames = strategyNames;
    this.initStrategies()
  }

  initStrategies() {
    for(let strategyName of this.strategyNames) {
      this.setStrategy(strategyName, STRATEGY_TO_GENERATORS_MAP[strategyName]);
    }
  }

  setGenerator() {
    this.generator = PasswordGen.create(this.length, [...this.strategyInstance.values()])
  }

  setStrategy(name, Constructor) {
    this.strategyInstance.set(name, Constructor.create());
    this.setGenerator();
    return this;
  }

  removeStrategy(name) {
    this.strategyInstance.delete(name);
    this.setGenerator();
    return this;
  }

  /**
   * @return {string} password string
   */
  generate() {
    return this.generator.generate()
  }

  setLength(length) {
    this.length = length;
    this.setGenerator();
  }
}