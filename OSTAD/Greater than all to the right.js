function main(input) {
    const lines = input.trim().split("\n");
    let index = 0;

    const T = parseInt(lines[index++]); 

    for (let t = 0; t < T; t++) {
        const N = parseInt(lines[index++]); 
        const arr = lines[index++].trim().split(" ").map(Number);

        const result = [];
        let maxFromRight = -Infinity;

        for (let i = N - 1; i >= 0; i--) {
            if (arr[i] > maxFromRight) {
                result.push(arr[i]);
                maxFromRight = arr[i];
            }
        }

        result.sort((a, b) => a - b);

        console.log(result.join(" "));
    }
}