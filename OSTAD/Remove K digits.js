function removeKDigits(num, k) {
    let stack = [];

    for (let digit of num) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    let result = stack.join('').replace(/^0+/, '');
    return result === "" ? "0" : result;
}

function main(input) {
    const lines = input.trim().split('\n');
    const T = parseInt(lines[0]);
    for (let i = 1; i <= T; i++) {
        let [N, K] = lines[i].split(' ');
        K = parseInt(K);
        console.log(removeKDigits(N, K));
    }
}
