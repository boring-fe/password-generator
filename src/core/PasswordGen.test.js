import {PasswordGen} from './PasswordGen';

describe('Password generator', () => {
  let strategies = [
    {
      generate() {
        return 'h'
      }
    },
    {
      generate() {
        return 9
      }
    },
  ];

  const length = 20;
  test('Should create instance', () => {
    const gen = PasswordGen.create(length, strategies);
    expect(gen).not.toBe(undefined)
  })

  test('Should return random number 0 to 9', () => {
    const gen = PasswordGen.create(length, strategies);
    const password = gen.generate();
    expect(password.length).toEqual(length);
    expect(password.indexOf('h')).not.toBe(-1);
    expect(password.indexOf('9')).not.toBe(-1);
  });
})