const sum = require('./sum');

test('suma de números [1, 5.2, 4, 0, -1]', () => {
  expect(sum(numbersList)).toBe(9.2);
});
