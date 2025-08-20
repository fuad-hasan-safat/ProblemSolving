function main(input) {
    const lines = input.trim().split("\n");
    let t = parseInt(lines[0]);
    let idx = 1;

    for (let day = 1; day <= t; day++) {
        const n = parseInt(lines[idx++]);
        const queue = [];
        const stack = [];
        let satisfied = 0;

        for (let i = 0; i < n; i++) {
            const parts = lines[idx++].trim().split(" ");
            const type = parseInt(parts[0]);

            if (type === 1) {
                queue.push(parts[1]); 
            } else if (type === 2) {
                stack.push(parts[1]); 
            } else if (type === 3) {
                if (queue.length > 0) {
                    const student = queue.shift(); 
                    if (stack.length > 0 && stack[stack.length - 1] === student) {
                        satisfied++;
                        stack.pop();
                    } else {
                        queue.push(student);
                    }
                }
            }
        }

        console.log(`Day ${day}: ${satisfied}`);
    }
}
