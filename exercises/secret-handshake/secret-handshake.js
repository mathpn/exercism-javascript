const SECRET_COMMANDS = [
    [8, "jump"],
    [4, "close your eyes"],
    [2, "double blink"],
    [1, "wink"],
]

export const commands = (code) => {
    let commands_ = SECRET_COMMANDS.reduce((previous, [number, command]) => {
        if (number & code) {
            previous.unshift(command);
        }
        return previous;
    }, [])
    return code & 16 ? commands_.reverse() : commands_;
};
