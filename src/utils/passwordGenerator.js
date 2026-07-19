import { UPPER, LOWER, NUMBERS, SYMBOL_SETS, WORDS } from "./constants";

/**
 * Cryptographically secure random integer in [0, max).
 */
function secureRandomInt(max) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] % max;
}

/**
 * Pick a random character from a string using crypto API.
 */
export function randomChar(str) {
    return str[secureRandomInt(str.length)];
}

/**
 * Fisher-Yates shuffle for uniform distribution.
 */
export function shuffle(str) {
    const arr = str.split("");
    for (let i = arr.length - 1; i > 0; i--) {
        const j = secureRandomInt(i + 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
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

    if (symbols && symbols.length > 0) {
        pool += symbols;
        required.push(randomChar(symbols));
    }

    // Guard: if pool is empty, fallback to lowercase
    if (pool.length === 0) {
        pool = LOWER;
        required.push(randomChar(LOWER));
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
        words.push(WORDS[secureRandomInt(WORDS.length)]);
    }

    return words.join("-");
}

export function generatePINPassword(length) {
    let pinLength = Math.min(length, 12);
    let result = "";
    for (let i = 0; i < pinLength; i++) {
        result += secureRandomInt(10);
    }
    return result;
}

/**
 * Evaluate password strength on a 0-4 scale.
 * Returns { score, label, percent }.
 */
export function getPasswordStrength(password) {
    if (!password) return { score: 0, label: "None", percent: 0 };

    let score = 0;
    const len = password.length;

    // Length scoring
    if (len >= 8) score++;
    if (len >= 16) score++;
    if (len >= 24) score++;

    // Character variety scoring
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[^A-Za-z0-9]/.test(password);

    const variety = [hasUpper, hasLower, hasNumbers, hasSymbols].filter(Boolean).length;
    score += variety;

    // Normalize to 0-4
    score = Math.min(4, Math.max(0, Math.floor(score * 4 / 7)));

    const labels = ["Weak", "Fair", "Good", "Strong", "Excellent"];
    const percents = [10, 30, 55, 80, 100];

    return {
        score,
        label: labels[score],
        percent: percents[score],
    };
}
