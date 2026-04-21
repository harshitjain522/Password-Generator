import { UPPER, LOWER, NUMBERS, SYMBOL_SETS, WORDS } from "./constants";

export function randomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
}

export function shuffle(str) {
    return str
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
}

export function generateRandomPassword(
    length,
    upper,
    lower,
    numbers,
    symbolMode,
    customSymbols,
) {
    let result = "";
    let pool = "";
    let required = [];

    if (upper) {
        pool += UPPER;
        required.push(randomChar(UPPER));
    }
    if (lower) {
        pool += LOWER;
        required.push(randomChar(LOWER));
    }
    if (numbers) {
        pool += NUMBERS;
        required.push(randomChar(NUMBERS));
    }

    let symbols =
        symbolMode === "custom" ? customSymbols : SYMBOL_SETS[symbolMode];

    if (symbols.length > 0) {
        pool += symbols;
        required.push(randomChar(symbols));
    }

    result += required.join("");

    for (let i = result.length; i < length; i++) {
        result += randomChar(pool);
    }

    return shuffle(result);
}

export function generateMemorablePassword(length) {
    let wordCount = Math.max(3, Math.floor(length / 6));
    let words = [];

    for (let i = 0; i < wordCount; i++) {
        words.push(WORDS[Math.floor(Math.random() * WORDS.length)]);
    }

    return words.join("-");
}

export function generatePINPassword(length) {
    let pinLength = Math.min(length, 12);
    let result = "";
    for (let i = 0; i < pinLength; i++) {
        result += Math.floor(Math.random() * 10);
    }
    return result;
}
