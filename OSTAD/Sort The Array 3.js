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

    const aux = new Array(n);

    function merge(src, dest, left, mid, right) {
        let i = left, j = mid, k = left;
        while (i < mid && j < right) {
            if (src[i] <= src[j]) dest[k++] = src[i++];
            else dest[k++] = src[j++];
        }
        while (i < mid) dest[k++] = src[i++];
        while (j < right) dest[k++] = src[j++];
    }

    let src = arr;
    let dest = aux;
    for (let width = 1; width < n; width *= 2) {
        for (let i = 0; i < n; i += 2 * width) {
            const left = i;
            const mid = Math.min(i + width, n);
            const right = Math.min(i + 2 * width, n);
            merge(src, dest, left, mid, right);
        }
        const tmp = src;
        src = dest;
        dest = tmp;
    }

    console.log(src.join(' '));
}