function main (input) {
    const lines = input.trim().split('\n');
    const N = parseInt(lines[0].trim());
    const arr = lines[1].trim().split(' ').map(Number);
    let maxLength = 0;
    let res = 0;

    for(let i = 0; i < N; i++){
        if(arr[i] === 1){
            maxLength++
        }
        if(arr[i] === 0){
            res = Math.max(maxLength, res);
            maxLength = 0;
        }
    }
    res = Math.max(maxLength, res);
    console.log(res)
}