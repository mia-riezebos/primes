import generatePrimes, { cache } from "../index";
import { cache as isPrimeCache } from "@mia-cx/isprime";

const amount = 10000;

test(`generate ${amount} primes.`, () => {
  expect(cache.size).toBe(0);
  const primes = generatePrimes(amount);
  expect(primes.length).toBe(amount);
  expect(cache.size).toBe(amount - 1);
});

test(`generate ${amount} primes (cached).`, () => {
  expect(cache.size).toBe(amount - 1);
  const primes = generatePrimes(amount);
  expect(primes.length).toBe(amount);
  cache.clear();
});

const start = 1000;
const end = 2000;

test(`generate primes between ${start} and ${end}`, () => {
  cache.clear();
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
