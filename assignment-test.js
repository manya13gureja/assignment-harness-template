const { fizzBuzz } = require('../src/candidate');

test('divisible by 3 returns Fizz', () => {
  expect(fizzBuzz(9)).toBe("Fizz");
});

test('divisible by 5 returns Buzz', () => {
  expect(fizzBuzz(10)).toBe("Buzz");
});

test('divisible by 15 returns FizzBuzz', () => {
  expect(fizzBuzz(30)).toBe("FizzBuzz");
});

test('non-divisible returns number', () => {
  expect(fizzBuzz(7)).toBe(7);
});
