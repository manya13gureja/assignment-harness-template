const { sum } = require('../src/candidate');

test('sums two numbers', () => {
  expect(sum(1,2)).toBe(3);
});

test('handles negative numbers', () => {
  expect(sum(-1,5)).toBe(4);
});
