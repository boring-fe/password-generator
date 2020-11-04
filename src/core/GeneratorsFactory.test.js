import {GeneratorsFactory, STRATEGIES_NAME} from './GeneratorsFactory'

describe('Generators factory', () => {
  const length = 20;
  test('should create instance', () => {
    const strategies = [
      STRATEGIES_NAME.LETTERS,
      STRATEGIES_NAME.NUMBERS,
      STRATEGIES_NAME.SYMBOLS
    ]
    const factory = GeneratorsFactory.create(length, strategies);

    expect(factory).not.toBe(undefined);
  });

  test('should generate random password', () => {
    const strategies = [
      STRATEGIES_NAME.LETTERS,
      STRATEGIES_NAME.LETTERS_UPPER,
      STRATEGIES_NAME.NUMBERS,
      STRATEGIES_NAME.SYMBOLS
    ]
    const factory = GeneratorsFactory.create(length, strategies);
    const password = factory.generate();
    console.log(password)
    expect(password).not.toBe(factory.generate());
    expect(password).not.toBe(factory.generate());
    expect(password).not.toBe(factory.generate());
  });
  test('should generate random password with letters in upper case', () => {
    const strategies = [
      STRATEGIES_NAME.LETTERS_UPPER
    ]
    const factory = GeneratorsFactory.create(length, strategies);
    const password = factory.generate();
    console.log(password)
    expect(password).toBe(password.toUpperCase());
  });
});