function main(input) {
    const lines = input.trim().split("\n");
    const N = parseInt(lines[0]);
    const arr = lines[1].split(" ").map(Number);

    arr.sort((a, b) => a - b); 
    const median = arr[Math.floor(N / 2)];

    console.log(median);
}
