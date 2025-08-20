function slidingWindowMax(arr, N, K) {
    const deque = []; 
    const result = [];

    for (let i = 0; i < N; i++) {

        while (deque.length && deque[0] <= i - K) {
            deque.shift();
        }

        while (deque.length && arr[deque[deque.length - 1]] <= arr[i]) {
            deque.pop();
        }

        deque.push(i);

        if (i >= K - 1) {
            result.push(arr[deque[0]]);
        }
    }
    return result;
}

function main(input) {
    const lines = input.trim().split("\n");
    let t = parseInt(lines[0]);
    let idx = 1;

    for (let tc = 0; tc < t; tc++) {
        const [N, K] = lines[idx++].split(" ").map(Number);
        const arr = lines[idx++].split(" ").map(Number);
        console.log(slidingWindowMax(arr, N, K).join(" "));
    }
}
