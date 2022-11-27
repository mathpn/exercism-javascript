const DAY_LENGTH = 24 * 60;

const euclideanRem = (number, rhs) => {
    return (rhs + (number % rhs)) % rhs;
}

export class Clock {
    constructor(hour = 0, minutes = 0) {
        this.minutes = euclideanRem(60 * (hour % 24) + minutes, DAY_LENGTH);
    }

    toString() {
        let hours = Math.floor(this.minutes / 60);
        let minutes = this.minutes % 60;
        return [hours, minutes].map(x => `${x}`.padStart(2, 0)).join(":");
    }

    plus(minutes) {
        this.minutes = euclideanRem(this.minutes + minutes, DAY_LENGTH);
        return this;
    }

    minus(minutes) {
        this.minutes = euclideanRem(this.minutes - minutes, DAY_LENGTH);
        return this;
    }

    equals(clock) {
        return this.toString() === clock.toString();
    }
}

