import {NumbersGen} from './NumbersGen';

describe('Num gen', () => {
  test('Should create instance', () => {
    const gen = NumbersGen.create();
    expect(gen).not.toBe(undefined)
  })

  test('Should return random number 0 to 9', () => {
    const gen = NumbersGen.create();
    const symb = gen.generate();
    expect(symb).not.toBe(undefined);
    expect(typeof symb).toBe('number');
    expect(symb < 0).toBe(false);
    expect(symb > 9).toBe(false);
  });
})