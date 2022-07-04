import isPrime, { WHEEL_PRIMES } from "@mia-cx/isprime";

export const cache: Set<number> = new Set();

/**
 * generates an array of primes (within a given range)
 * @param n amount of primes to generate OR start of range
 * @param o end of range
 * @returns array of prime numbers
 */
export default function generatePrimes(n: number, o?: number): number[] {
  if (n == o) {
    // console.debug(`n == o, checking if ${n} is prime`);
    return isPrime(n) ? [n] : [];
  }
  const primes: number[] = [2];

  if (n === 2) return primes;

  let i = 3;

  if (!o) {
    while (primes.length < n) {
      if (cache.has(i) || isPrime(i)) {
        cache.add(i);
        primes.push(i);
      }
      i += 2;
    }
  } else {
    if (n > o) {
      // console.debug("n > o, swapping variables");
      [n, o] = [o, n];
    }

    console.debug(`generating primes between ${n} and ${o}`);
    i = Math.max(3, n);
    if (i > 3) {
      primes.shift();
    }
    if (i % 2 === 0) i++;
    while (i <= o) {
      if (isPrime(i)) {
        cache.add(i);
        primes.push(i);
      }
      i += 2;
    }
  }
  return primes;
}
