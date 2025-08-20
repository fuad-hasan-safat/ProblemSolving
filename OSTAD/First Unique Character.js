function firstNonRepeatingChar(str) {
    const freq = {};

    for (let ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let ch of str) {
        if (freq[ch] === 1) {
            return ch;
        }
    }

    return 'N'; 
}

function main(input) {
    const lines = input.trim().split('\n');
    const T = parseInt(lines[0]);

    for (let i = 1; i <= T; i++) {
        const str = lines[i].trim();
        console.log(firstNonRepeatingChar(str));
    }
}

