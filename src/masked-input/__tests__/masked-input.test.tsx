import { format } from '../masked-input';

describe('MaskedInput', () => {
  describe('format', () => {
    const cases = [
      { value: '', mask: '(###) ###-####', expected: '' },
      { value: '1', mask: '(###) ###-####', expected: '(1' },
      { value: '12345', mask: '(###) ###-####', expected: '(123) 45' },
      { value: '123456', mask: '(###) ###-####', expected: '(123) 456' },
      { value: '12345678900000', mask: '(###) ###-####', expected: '(123) 456-7890' },
    ];
    cases.forEach(({ value, mask, expected }, i) => {
      it(`test ${i}: ${value} => ${mask}`, () => {
        expect(format(value, mask)).toBe(expected);
      });
    });
  });
});
