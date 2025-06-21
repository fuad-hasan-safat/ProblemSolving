function main (input) {
    const digitWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    const digits = input.trim().split('');

    const res =  digits.map(d => digitWords[parseInt(d)]).join(' ');

    console.log(res);
    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});