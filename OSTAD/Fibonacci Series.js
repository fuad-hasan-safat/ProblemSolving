function main (input) {

    const N = parseInt(input);
    let fibserise = [];

    if (N>0) { fibserise.push(0)}
    if (N>1) { fibserise.push(1)}

    for (let i = 2; i < N; i++){
        fibserise.push(fibserise[i-1] + fibserise[i-2]);
    }
    
    console.log(fibserise.join(' '));
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});