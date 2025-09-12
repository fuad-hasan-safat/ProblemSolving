function main(input) {
    const lines = input.trim().split("\n");
    const [N, K] = lines[0].split(" ").map(Number);
    const arr = lines[1].split(" ").map(Number);

    const present = new Set();

    for (let num of arr) {
        if (num < K) {
            present.add(num);
        }
    }

    const totalPossible = K - 1; 
    const answer = totalPossible - present.size;

    console.log(answer);
}