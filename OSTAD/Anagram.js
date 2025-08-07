function main(input) {
    const [A, B] = input.trim().split('\n');

    if (A.length !== B.length) return console.log("NO");

    const freq = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);

    for (let i = 0; i < A.length; i++) {
        freq[A.charCodeAt(i) - aCode]++;
        freq[B.charCodeAt(i) - aCode]--;
    }

    for (let count of freq) {
        if (count !== 0) return console.log("NO");
    }

    console.log("YES");

}