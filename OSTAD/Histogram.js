function largestRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;
    let n = heights.length;

    for (let i = 0; i <= n; i++) {
        let h = (i === n ? 0 : heights[i]);

        while (stack.length > 0 && h < heights[stack[stack.length - 1]]) {
            let height = heights[stack.pop()];
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    return maxArea;
}

function main(input) {
    const lines = input.trim().split('\n');
    const T = parseInt(lines[0]);
    let idx = 1;

    for (let t = 0; t < T; t++) {
        const N = parseInt(lines[idx++]);
        const arr = lines[idx++].split(" ").map(Number);
        console.log(largestRectangleArea(arr));
    }

}
