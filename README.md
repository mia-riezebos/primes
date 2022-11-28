# @mia-cx/primes
a fairly performant prime generator by @mia-cx

## Installation
Using npm:
```shell
npm i @mia-cx/primes
```

Using pnpm:
```shell
pnpm i @mia-cx/primes
```

## Usage
commonjs
```js
const generatePrimes = require('@mia-cx/primes');

console.log(generatePrimes(100)); // returns 100 primes
console.log(generatePrimes(100, 200)); // returns prime numbers between 100 and 200
```

esm
```js
import isPrime from "@mia-cx/primes";

console.log(generatePrimes(100)); // returns an array of 100 primes
console.log(generatePrimes(100, 200)); // returns an array of prime numbers between 100 and 200
```
