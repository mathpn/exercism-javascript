const ALPHABET = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

export class Robot {

    static ALL_NAMES = createNames();
    static AVAILABLE_NAMES = shuffle(Robot.ALL_NAMES);
    static releaseNames() {
        Robot.AVAILABLE_NAMES = shuffle(Robot.ALL_NAMES);
    }

    constructor() {
        this.reset();
    }

    reset() {
        this._name = Robot.AVAILABLE_NAMES.pop();
    }

    get name() {
        return this._name.slice();
    }
}


function letterCombinations() {
    return ALPHABET.flatMap(c1 =>
        ALPHABET.flatMap(c2 => `${c1}${c2}`)
    );
}


function numberCombinations(length) {
    return [...Array(10 ** length).keys()].map(num => `${num}`.padStart(length, '0'));
}


function createNames() {
    let letters = letterCombinations();
    let numbers = numberCombinations(3);
    return letters.flatMap(l => numbers.flatMap(n => l + n));
}

function shuffle(seq) {
    let array = [...seq];
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

