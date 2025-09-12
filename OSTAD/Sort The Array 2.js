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
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        if (minIdx !== i) {
            const tmp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = tmp;
        }
    }

    console.log(arr.join(' '));
}