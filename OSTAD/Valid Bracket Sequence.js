function isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let ch of s) {
        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
        } else {
            if (stack.length === 0 || stack.pop() !== map[ch]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}


function main (input) {
    const lines = input.trim().split('\n');
    const T = parseInt(lines[0]);

    for (let i = 1; i <= T; i++) {
        const s = lines[i].trim();
        console.log(isValid(s) ? "Valid" : "Not valid");
    }
}