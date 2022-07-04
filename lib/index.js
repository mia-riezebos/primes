"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = void 0;
const isprime_1 = __importDefault(require("@mia-cx/isprime"));
exports.cache = new Set();
/**
 * generates an array of primes (within a given range)
 * @param n amount of primes to generate OR start of range
 * @param o end of range
 * @returns array of prime numbers
 */
function generatePrimes(n, o) {
    if (n == o) {
        // console.debug(`n == o, checking if ${n} is prime`);
        return (0, isprime_1.default)(n) ? [n] : [];
    }
    const primes = [2];
    if (n === 2)
        return primes;
    let i = 3;
    if (!o) {
        while (primes.length < n) {
            if (exports.cache.has(i) || (0, isprime_1.default)(i)) {
                exports.cache.add(i);
                primes.push(i);
            }
            i += 2;
        }
    }
    else {
        if (n > o) {
            // console.debug("n > o, swapping variables");
            [n, o] = [o, n];
        }
        console.debug(`generating primes between ${n} and ${o}`);
        i = Math.max(3, n);
        if (i > 3) {
            primes.shift();
        }
        if (i % 2 === 0)
            i++;
        while (i <= o) {
            if ((0, isprime_1.default)(i)) {
                exports.cache.add(i);
                primes.push(i);
            }
            i += 2;
        }
    }
    return primes;
}
exports.default = generatePrimes;
