export class Triangle {
    constructor(...sides) {
        this.valid = this.isValid(sides);
        this.uniqueSides = new Set(sides).size;
    }

    get isEquilateral() {
        return this.uniqueSides == 1 && this.valid;
    }

    get isIsosceles() {
        return this.uniqueSides <= 2 && this.valid;
    }

    get isScalene() {
        return this.uniqueSides == 3 && this.valid;
    }

    isValid(sides) {
        let sum = sides.reduce((a, b) => a + b, 0);
        return sides.every(v => sum - v > v);
    }
}
