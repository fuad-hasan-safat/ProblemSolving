function main (input) {
   const lines = input.trim().split('\n');
   const [N, K] = lines[0].trim().split(' ').map(Number);
    const arr = lines[1].trim().split(' ').map(Number);

    if(K === 0){
        let temp = arr[0]
        arr[0] =  arr[N-1]
        for(let i = 1; i < N; i++){
            let m = arr[i];
            arr[i] = temp;
            temp = m;
        }
    }else {
        let temp = arr[N-1];
        arr[N-1] = arr[0];
        for(let i = N - 2; i >=0; i--){
            let m = arr[i];
            arr[i] = temp;
            temp = m;
        }
    }
    console.log(arr.join(' '))
}