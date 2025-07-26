function main (input) {
    const lines = input.trim().split('\n');
    const N = parseInt(lines[0]);
    const arr = lines[1].split(' ').map(Number);

    let newArr = `${arr[0]}`

    for(let i = 1; i < N; i++){
        if(arr[i] !== arr[i-1]){
            newArr += ' '+arr[i]
        }
    }

    console.log(newArr)

}