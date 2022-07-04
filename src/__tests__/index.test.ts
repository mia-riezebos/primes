import generatePrimes, { cache } from "./index";

const amount = 1000;

test(`generate ${amount} primes.`, () => {
  expect(cache.size).toBe(0);
  const primes = generatePrimes(amount);
  expect(primes.length).toBe(amount);
  expect(cache.size).toBe(amount);
});

test(`generate ${amount} primes (cached).`, () => {
  expect(cache.size).toBe(amount);
  const primes = generatePrimes(amount);
  expect(primes.length).toBe(amount);
});

const start = 1000;
const end = 2000;

cache.clear();

test(`generate primes between ${start} and ${end}`, () => {
  expect(cache.size).toBe(0);
  const primes = generatePrimes(start, end);
  expect(primes.length).toBe(135);
  expect(cache.size).toBe(135);
});

test(`generate primes between ${start} and ${end} (cached).`, () => {
  expect(cache.size).toBe(135);
  const primes = generatePrimes(start, end);
  expect(primes.length).toBe(135);
});
