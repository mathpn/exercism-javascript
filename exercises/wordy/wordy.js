const OPERATIONS = {
    plus: (x, y) => x + y,
    minus: (x, y) => x - y,
    multiplied: (x, y) => x * y,
    divided: (x, y) => x / y,
}

export const answer = (query) => {
    query = query.replace("What is", "").replace(/by/g, "").replace(/[^\w\s\'-]|_/g, "").split(" ");
    let result = 0;
    let operation = OPERATIONS.plus;
    let status = 0;
    for (let element of query) {
        if (!element) {
            continue;
        }
        if (status !== 0 && status !== 1) {
            break;
        }
        let number = parseInt(element)
        if (!isNaN(number)) {
            result = operation(result, number);
            status += 1;
        } else {
            operation = OPERATIONS[element];
            status += -1;
        }
        if (operation === undefined) {
            throw new Error("Unknown operation");
        }
    }

    if (status !== 1) {
        throw new Error("Syntax error");
    }

    return result;
};

