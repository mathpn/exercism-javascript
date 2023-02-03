
const FIRST_LETTER = 'a'.charCodeAt(0);
const N_LETTERS = 26;

export class Cipher {
    constructor(key) {
        this._key = key 
            ? [...key.toLowerCase()].map(char => char.charCodeAt(0) - FIRST_LETTER)
            : [...Array(100).keys()].map(_ => Math.floor(Math.random() * 26));
    }

    encode([...text]) {
        let key_len = this._key.length;
        return String.fromCharCode(...text.map((letter, i) => {
            let char = letter.charCodeAt(0);
            let key = this._key[i % key_len];
            char = (char + key - FIRST_LETTER) % N_LETTERS;
            return char + FIRST_LETTER;
        }));
    }

    decode([...text]) {
        let key_len = this._key.length;
        return String.fromCharCode(...text.map((letter, i) => {
            let char = letter.charCodeAt(0);
            let key = this._key[i % key_len];
            char = (N_LETTERS + char - key - FIRST_LETTER) % N_LETTERS;
            return char + FIRST_LETTER;
        }));
    }

    get key() {
        return this._key.map(x => String.fromCharCode(x + FIRST_LETTER)).join("");
    }
}
