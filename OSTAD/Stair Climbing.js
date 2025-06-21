

function main (input) {
  const N = parseInt(input.trim());

    if (N === 0) {
        console.log(1); 
        return;
    }

    let a = 1; 
    let b = 1; 

    for (let i = 2; i <= N; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }

    console.log(b);
    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});