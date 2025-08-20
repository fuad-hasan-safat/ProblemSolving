function nextGreater(arr) {
    const n = arr.length;
    const res = new Array(n).fill(-1);
    const st = []; 

    for (let i = 0; i < n; i++) {
        
        while (st.length && arr[i] > arr[st[st.length - 1]]) {
            res[st.pop()] = arr[i];
        }
        st.push(i);
    }

    return res;
}

function main(input) {

    const nums = (input.match(/-?\d+/g) || []).map(Number);
    let idx = 0;

    const T = nums[idx++]; 
    const out = [];

    for (let tc = 0; tc < T; tc++) {
        const N = nums[idx++]; 
        const arr = nums.slice(idx, idx + N);
        idx += N;

        out.push(nextGreater(arr).join(' '));
    }

    console.log(out.join('\n'));
}