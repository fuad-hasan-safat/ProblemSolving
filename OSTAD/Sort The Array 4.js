function main(input) {
    if (!input) return;
    const tokens = input.trim().split(/\s+/);
    const n = Number(tokens[0]) || 0;
    const values = new Array(n);
    let max = 0;
    for (let i = 0; i < n; i++) {
        const val = Number(tokens[1 + i]);
        values[i] = val;
        if (val > max) max = val;
    }

    const counts = new Uint32Array(max + 1);
    for (let i = 0; i < n; i++) {
        counts[values[i]]++;
    }

    const parts = [];
    for (let v = 0; v <= max; v++) {
        const c = counts[v];
        if (c > 0) {
            parts.push((v + ' ').repeat(c));
        }
    }

    const output = parts.join('').trim();
    console.log(output);
}