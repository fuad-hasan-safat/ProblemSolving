
function removeAdjacentDuplicates(str) {
    const stack = [];

    for (let ch of str) {
        if (stack.length > 0 && stack[stack.length - 1] === ch) {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }

    return stack.length === 0 ? "-1" : stack.join('');
}

function main(input) {
    const lines = input.trim().split('\n');
    const T = parseInt(lines[0]);

    for (let i = 1; i <= T; i++) {
        console.log(removeAdjacentDuplicates(lines[i].trim()));
    }
}
