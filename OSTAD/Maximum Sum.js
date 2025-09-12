function main(input) {
    const lines = input.trim().split("\n");
    const [N, K] = lines[0].split(" ").map(Number);
    const arr = lines[1].split(" ").map(Number);

    arr.sort((a, b) => b - a);

    let sum = 0;
    for (let i = 0; i < K; i++) {
        sum += arr[i];
    }

    console.log(sum);
}