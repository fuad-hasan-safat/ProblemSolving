function main (input) {
    const S = input.trim();
    const freq = new Array(26).fill(0); 

    for (let ch of S) {
        freq[ch.charCodeAt(0) - 97]++; 
    }

    let maxCount = 0;
    let resultChar = '';

    for (let i = 0; i < 26; i++) {
        if (freq[i] > maxCount) {
            maxCount = freq[i];
            resultChar = String.fromCharCode(i + 97);
        }
    }

    console.log(resultChar, maxCount);
}