const chai = require('chai')
const { assert } = chai;

// Exemple de 3 fonctions différentes mais obtenant le même résultat
const { chunk, _chunk, __chunk } = require('./responses')

describe("Array Chunking", () => {
    it("Should implement array chunking", () => {
        assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
        assert.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
        assert.deepEqual(chunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);

        assert.deepEqual(_chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
        assert.deepEqual(_chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
        assert.deepEqual(_chunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);

        assert.deepEqual(__chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
        assert.deepEqual(__chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
        assert.deepEqual(__chunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);
    });
});

describe("String Reversal", () => {
    it("Should reverse string", () => {
        assert.equal(reverse("Hello World!"), "!dlroW olleH");
        assert.equal(_reverse("Hello World!"), "!dlroW olleH");
        assert.equal(__reverse("Hello World!"), "!dlroW olleH");
    });
});

describe("Palindrome", () => {
    it("Should return true", () => {
        assert.equal(isPalindrome("Cigar? Toss it in a can. It is so tragic"), true);
        assert.equal(
            __isPalindrome("Cigar? Toss it in a can. It is so tragic"),
            true
        );
    });

    it("Should return false", () => {
        assert.equal(isPalindrome("sit ad est love"), false);
        assert.equal(_isPalindrome("sit ad est love"), false);
    });
});

describe("Integer Reversal", () => {
    it("Should reverse integer", () => {
        assert.equal(reverse(1234), 4321);
        assert.equal(reverse(-1200), -21);
    });
});

let output;
describe("Fizz Buzz", () => {
    beforeEach(() => (output = fizzBuzz(30)));

    it("Should output number", () => {
        assert.equal(output[0], 1);
    });

    it("Should output Fizz", () => {
        assert.equal(output[1], "Fizz");
    });

    it("Should output Buzz", () => {
        assert.equal(output[2], "Buzz");
    });

    it("Should output Fizz Buzz", () => {
        assert.equal(output[5], "Fizz Buzz");
    });
});

describe("Max Character", () => {
    it("Should return max character", () => {
        assert.equal(max("Hello World!"), "l");
    });
});

describe("Anagrams", () => {
    it("Should implement anagrams", () => {
        assert.equal(anagrams("hello world", "world hello"), true);
        assert.equal(anagrams("hellow world", "hello there"), false);
        assert.equal(anagrams("hellow world", "hello there!"), false);

        assert.equal(_anagrams("hello world", "world hello"), true);
        assert.equal(_anagrams("hellow world", "hello there"), false);
    });
});

describe("Vowels", () => {
    it("Should count vowels", () => {
        assert.equal(vowels("hello world"), 3);
        assert.equal(_vowels("hello world"), 3);
    });
});

describe("Reverse Arrays", () => {
    it("Should reverse arrays", () => {
        assert.deepEqual(reverseArray([1, 2, 3, 4]), [4, 3, 2, 1]);
        assert.deepEqual(reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
        assert.deepEqual(_reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
    });
});

describe("Reverse Words", () => {
    it("Should reverse words", () => {
        assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
        assert.equal(_reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
    });
});

describe("Capitalization", () => {
    it("Should capitalize phrase", () => {
        assert.equal(capitalize("hello world"), "Hello World");
        assert.equal(_capitalize("hello world"), "Hello World");
    });
});

describe("Caesar Cipher", () => {
    it("Should shift to the right", () => {
        assert.equal(caesarCipher("I love JavaScript!", 100), "E hkra FwrwOynelp!");
        assert.equal(_caesarCipher("I love JavaScript!", 100), "E hkra FwrwOynelp!");
    });

    it("Should shift to the left", () => {
        assert.equal(caesarCipher("I love JavaScript!", -100), "M pszi NezeWgvmtx!");
        // assert.equal(_caesarCipher("I love JavaScript!", -100), "M pszi NezeWgvmtx!");
    });
});

// Trouver dans un tableau donnée les paires dont le total est égale au 2ème argument.
describe("Two Sum", () => {
    it("Should implement two sum", () => {
        assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
    });
});

describe("Max Profit", () => {
    it("Should return minimum buy price and maximum sell price", () => {
        assert.deepEqual(maxProfit([1, 2, 3, 4, 5]), [1, 5]);
        assert.deepEqual(maxProfit([2, 1, 5, 3, 4]), [1, 5]);
        assert.deepEqual(maxProfit([2, 10, 1, 3]), [2, 10]);
        assert.deepEqual(maxProfit([2, 1, 2, 11]), [1, 11]);
        assert.deepEqual(maxProfit([2, 3, 1, 5, 4]), [1, 5]);
        assert.deepEqual(maxProfit([1, 2, 5, 3, 4]), [1, 5]);
        assert.deepEqual(maxProfit([2, 10, 5, 1, 3]), [2, 10]);
    });
});

// Trouver tous les nombres premier de 0 au nombre saisi.
describe("Sieve of Eratosthenes", () => {
    it("Should return all prime numbers", () => {
        assert.deepEqual(primes(10), [2, 3, 5, 7]);
    });
});

describe("Fibonacci", () => {
    it("Should implement fibonacci", () => {
        assert.equal(fibonacci(1), 1);
        assert.equal(fibonacci(2), 1);
        assert.equal(fibonacci(3), 2);
        assert.equal(fibonacci(6), 8);
        assert.equal(fibonacci(10), 55);
        assert.equal(_fibonacci(1), 1);
        assert.equal(_fibonacci(2), 1);
        assert.equal(_fibonacci(3), 2);
        assert.equal(_fibonacci(10), 55);
    });
});
