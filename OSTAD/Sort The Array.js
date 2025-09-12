function main(input) {
    if (!input) return;
    const tokens = input.trim().split(/\s+/);
    const n = Number(tokens[0]) || 0;
    if (n === 0) {
        console.log('');
        return;
    }

    const arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Number(tokens[1 + i]);
    }

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                swapped = true;
            }
        }
        if (!swapped) break; 
    }

    console.log(arr.join(' '));
}