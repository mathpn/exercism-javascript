//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
    constructor() {
        this.obj = {};
    }
    roster() {
        return JSON.parse(JSON.stringify(this.obj));
    }

    add(name, grade) {
        let grades = Object.keys(this.obj);
        grades.forEach(grade => {
            let students = this.obj[grade].filter(x => x !== name);
            this.obj[grade] = students;
        });
        if (!(grade in this.obj)) this.obj[grade] = [];
        this.obj[grade].push(name);
        this.obj[grade].sort();
    }

    grade(grade) {
        let students = this.obj[grade] || [];
        return [...students];
    }
}
