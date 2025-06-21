function main (input) {
    const s = input.trim();
    const n = s.length;
    const half = Math.floor(n / 2);
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let count = 0;
    
    for (let i = 0; i < half; i++) {
        if (vowels.has(s[i])) {
            count++;
        }
        if (vowels.has(s[n - half + i])) {
            count--;
        }
    }
    
    console.log(count === 0 ? "true" : "false");
    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});