function main(input) {
   const lines = input.trim().split('\n');
   const N = parseInt(lines[0]);
   const arr = lines[1].split(' ').map(Number)

   let start = -1, end = -1;
   let max = arr[0], min = arr[N-1];

   for(let i=1; i<N; i++){
       if(arr[i] < max){
           end = i;
       } else {
           max = arr[i];
       }
   }

   for(let i=N-2; i>=0; i--){
       if(arr[i] > min){
           start = i;
       } else {
           min = arr[i];
       }
   }

   if(start == -1) {
       console.log("-1");
   } else {
       console.log(`${start+1} ${end+1}`);
   }
}
