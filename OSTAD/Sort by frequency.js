function main(input) {
    const lines = input.trim().split("\n");
    const N = parseInt(lines[0]);
    const arr = lines[1].split(" ").map(Number);

    const freq = new Map();
    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    const unique = Array.from(freq.keys());
    unique.sort((a, b) => {
        if (freq.get(b) !== freq.get(a)) {
            return freq.get(b) - freq.get(a); 
        }
        return a - b; 
    });

    console.log(unique.join(" "));
}