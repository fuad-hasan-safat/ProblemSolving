function main(input) {
    const lines = input.trim().split('\n');
    const N = parseInt(lines[0]);
    const arr = lines[1].trim().split(' ').map(Number);
    const set1 = new Set(arr)

    let max = 0;

    while (set1.has(max)) {
        max++;
    }
    
    console.log(max)
}