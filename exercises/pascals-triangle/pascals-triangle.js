export function rows(number, triangle = []) {
    return number ? rows(number - 1, [...triangle, buildRow(triangle.at(-1))]) : triangle;
};

function buildRow(previous = []) {
    let row = [];
    for (let i = 0; i < previous.length + 1; i++) {
        row.push(previous[i - 1] + previous[i] || 1);
    }
    return row;
};
