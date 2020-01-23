import generateLuckyNumber from './generate';

it('should generate a number', () => {
  const randomNumber = generateLuckyNumber();
  expect(typeof randomNumber).toBe('number');
});
