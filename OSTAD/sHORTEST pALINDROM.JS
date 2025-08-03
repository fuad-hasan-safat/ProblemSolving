function main(input) {

    const str = input.trim();
    const revStr = str.split('').reverse().join('');
    const combined = str + '#' + revStr;

    const pi = new Array(combined.length).fill(0);

    for (let i = 1; i < combined.length; i++) {
        let j = pi[i - 1];
        while (j > 0 && combined[i] !== combined[j]) {
            j = pi[j - 1];
        }
        if (combined[i] === combined[j]) {
            j++;
        }
        pi[i] = j;
    }

    const longestPalinPrefix = pi[combined.length - 1];
    const unmatched = str.substring(longestPalinPrefix);
    const addPart = unmatched.split('').reverse().join('');

    console.log(addPart + str);
}