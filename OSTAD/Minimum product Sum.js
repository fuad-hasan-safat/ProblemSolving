function main(input) {
    const lines = input.trim().split("\n");
    const N = Number(lines[0]);
    const arr = lines[1].split(" ").map(Number);

    arr.sort((a, b) => a - b);

    let score = 0;
    let left = 0, right = N - 1;

    while (left < right) {
        score += arr[left] * arr[right];
        left++;
        right--;
    }

    console.log(score);
}
