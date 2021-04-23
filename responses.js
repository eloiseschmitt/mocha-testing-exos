exports.chunk = (array, size) => {
    const chunks = [];

    for (let item of array) {
        const lastChunk = chunks[chunks.length - 1];
        if (!lastChunk || lastChunk.length === size) chunks.push([item]);
        else lastChunk.push(item);
    }

    return chunks;
};

exports._chunk = (array, size) => {
    const chunks = [];
    let index = 0;

    while (index < array.length) {
        chunks.push(array.slice(index, index + size));
        index += size;
    }

    return chunks;
};

exports.__chunk = (array, size) => {
    const chunks = [];

    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }

    return chunks;
};

exports.reverse = string =>
    string
        .split("")
        .reverse()
        .join("");

exports._reverse = string => {
    let result = "";
    for (let character of string) result = character + result;
    return result;
};

exports.__reverse = string =>
    string.split("").reduce((result, character) => character + result);


exports.isPalindrome = string => {
    const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
    const stringCharacters = string
        .toLowerCase()
        .split("")
        .reduce(
            (characters, character) =>
                validCharacters.indexOf(character) > -1
                    ? characters.concat(character)
                    : characters,
            []
        );
    return stringCharacters.join("") === stringCharacters.reverse().join("");
};

exports._isPalindrome = string =>
    string
        .split("")
        .every((character, index) => character === string[string.length - 1 - index]);

exports.__isPalindrome = string => {
    const cleaned = string.replace(/\W/g, "").toLowerCase();

    return (
        cleaned ===
        cleaned
            .split("")
            .reverse()
            .join("")
    );
};

exports.reverse = integer =>
    parseInt(
        integer
            .toString()
            .split("")
            .reverse()
            .join("")
    ) * Math.sign(integer);

exports.fizzBuzz = number => {
    let output = [];
    for (let i = 1; i <= number; i++) {
        if (i % 6 === 0) output.push("Fizz Buzz");
        else if (i % 2 === 0) output.push("Fizz");
        else if (i % 3 === 0) output.push("Buzz");
        else output.push(i);
    }
    return output;
};

exports.max = string => {
    const characters = {};

    for (let character of string)
        characters[character] = characters[character] + 1 || 1;

    let maxCount = 0;
    let maxCharacter = null;

    for (let character in characters) {
        if (characters[character] > maxCount) {
            maxCount = characters[character];
            maxCharacter = character;
        }
    }

    return maxCharacter;
};

const charCount = string => {
    const table = {};

    for (let char of string.replace(/\W/g, "").toLowerCase())
        table[char] = table[char] + 1 || 1;

    return table;
};

exports.anagrams = (stringA, stringB) => {
    const charCountA = charCount(stringA);
    const charCountB = charCount(stringB);

    if (Object.keys(charCountA).length !== Object.keys(charCountB).length)
        return false;

    for (let char in charCountA)
        if (charCountA[char] !== charCountB[char]) return false;

    return true;
};

const _sort = string => string.replace(/\W/g, "").toLowerCase().split("").sort().join("");
exports._anagrams = (stringA, stringB) => _sort(stringA) === _sort(stringB);

exports.vowels = string => {
    let count = 0;
    const choices = "aeiou"; // or ['a', 'e', 'i', 'o', 'u']

    for (let character of string.toLowerCase())
        if (choices.includes(character)) count++;

    return count;
};

exports._vowels = string => {
    matches = string.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

exports.reverseArray = array => {
    for (let i = 0; i < array.length / 2; i++) {
        const temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
};

exports._reverseArray = array => {
    for (let i = 0; i < array.length / 2; i++) {
        [array[i], array[array.length - 1 - i]] = [
            array[array.length - 1 - i],
            array[i]
        ];
    }
    return array;
};

exports.reverseWords = string => {
    const wordsReversed = [];

    string.split(" ").forEach(word => {
        let wordReversed = "";
        for (let i = word.length - 1; i >= 0; i--) wordReversed += word[i];
        wordsReversed.push(wordReversed);
    });

    return wordsReversed.join(" ");
};

exports._reverseWords = string =>
    string
        .split(" ")
        .map(word =>
            word
                .split("")
                .reverse()
                .join("")
        )
        .join(" ");

exports.capitalize = phrase => {
    const words = [];

    for (let word of phrase.split(" "))
        words.push(word[0].toUpperCase() + word.slice(1));

    return words.join(" ");
};

exports._capitalize = phrase => {
    let title = phrase[0].toUpperCase();

    for (let i = 1; i < phrase.length; i++)
        title += phrase[i - 1] === " " ? phrase[i].toUpperCase() : phrase[i];

    return title;
};

exports.caesarCipher = (string, number) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const input = string.toLowerCase();
    let output = "";

    for (let i = 0; i < input.length; i++) {
        const letter = input[i];

        if (alphabet.indexOf(letter) === -1) {
            output += letter;
            continue;
        }

        let index = alphabet.indexOf(letter) + number % 26;
        if (index > 25) index -= 26;
        if (index < 0) index += 26;

        output +=
            string[i] === string[i].toUpperCase()
                ? alphabet[index].toUpperCase()
                : alphabet[index];
    }

    return output;
};

exports._caesarCipher = (str, n) => {
    let result = Array(str.length);
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        let lower = "a".charCodeAt(0);
        if (code >= lower && code < lower + 26)
            code = (code - lower + n) % 26 + lower;
        let upper = "A".charCodeAt(0);
        if (code >= upper && code < upper + 26)
            code = (code - upper + n) % 26 + upper;
        result[i] = String.fromCharCode(code);
    }
    return result.join("");
}

exports.twoSum = (array, sum) => {
    const pairs = [];
    const store = [];

    for (let part1 of array) {
        const part2 = sum - part1;
        if (store.indexOf(part2) !== -1) pairs.push([part1, part2]);
        store.push(part1);
    }

    return pairs;
};

exports.maxProfit = (prices) => {
    let minBuyPrice = prices[0] < prices[1] ? prices[0] : prices[1],
        maxSellPrice = prices[0] < prices[1] ? prices[1] : prices[2];
    let maxProfit = maxSellPrice - minBuyPrice;
    let tempBuyPrice = minBuyPrice;

    for (let index = 2; index < prices.length; index++) {
        const sellPrice = prices[index];

        if (minBuyPrice > sellPrice) tempBuyPrice = prices[index];
        else {
            const profit = sellPrice - minBuyPrice;
            if (profit > maxProfit)
                (maxProfit = profit),
                    (maxSellPrice = sellPrice),
                    (minBuyPrice = tempBuyPrice);
        }
    }

    return [minBuyPrice, maxSellPrice];
}

exports.primes = number => {
    const numbers = new Array(number + 1);
    numbers.fill(true);
    numbers[0] = numbers[1] = false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        for (let j = 2; i * j <= number; j++) numbers[i * j] = false;
    }

    return numbers.reduce(
        (primes, isPrime, prime) => (isPrime ? primes.concat(prime) : primes),
        []
    );
};

exports.fibonacci = element =>
    // if (element < 0) throw new Error("Index cannot be negative");
    element < 3 ? 1 : fibonacci(element - 1) + fibonacci(element - 2);

    exports._fibonacci = element => {
    const series = [1, 1];

    for (let i = 2; i < element; i++) {
        const a = series[i - 1];
        const b = series[i - 2];
        series.push(a + b);
    }

    return series[element - 1];
};