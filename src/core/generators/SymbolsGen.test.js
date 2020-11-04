import {SymbolsGen} from './SymbolsGen';

describe('SymbolsGen', () => {
  test('should create instance', () => {
    const gen = SymbolsGen.create();
    expect(gen).not.toBe(undefined);
  });

  test('Should return random symbol', () => {
    const gen = SymbolsGen.create();
    const s = gen.generate();
    expect(gen.chars.indexOf(s)).not.toEqual(-1);
  });
})