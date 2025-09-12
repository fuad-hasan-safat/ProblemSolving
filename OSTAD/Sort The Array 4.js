function main(input) {
    const lines = input.trim().split("\n");
    const N = parseInt(lines[0]);
    const arr = lines[1].split(" ").map(Number);

    const maxVal = Math.max(...arr);
    const count = new Array(maxVal + 1).fill(0);

    for (let num of arr) {
        count[num]++;
    }

    const result = [];
    for (let i = 0; i <= maxVal; i++) {
        while (count[i] > 0) {
            result.push(i);
            count[i]--;
        }
    }

    console.log(result.join(" "));
}
