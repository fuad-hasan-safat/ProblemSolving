function main (input) {
    const S = input.trim();
    
    for (let i = 0; i < S.length; i++) {
        const ch = S[i];

        if ((i % 2 === 0 && ch !== ch.toLowerCase()) ||
            (i % 2 === 1 && ch !== ch.toUpperCase())) {
            console.log("No");
            return;
        }
    }

    console.log("Yes");
    
}