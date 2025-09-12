function main(input) {
    const lines = input.trim().split("\n");
    const [N, K] = lines[0].split(" ").map(Number);
    const arr = lines[1].split(" ").map(Number);

    arr.sort((a, b) => a - b);

    console.log(arr[K - 1]);
}