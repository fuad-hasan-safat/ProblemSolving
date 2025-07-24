function main(input) {

    const lines = input.trim().split('\n');
    const N = parseInt(lines[0]);
    const intervels = [];

    for (let i = 1; i <= N; i++) {
        const [l, r] = lines[i].split(' ').map(Number);
        intervels.push([l, r]);
    }

    intervels.sort((a, b) => a[0] - b[0]);

    const merged = [];
    let current = intervels[0];

    for (let i = 1; i < N; i++) {
        const [nextStart, nextEnd] = intervels[i];

        if (nextStart <= current[1]) {
            current[1] = Math.max(nextEnd, current[1])
        } else {
            merged.push(current);
            current = intervels[i];
        }
    }
    merged.push(current)

    for (const [start, end] of merged) {
        console.log(`${start} ${end}`);
    }
}
