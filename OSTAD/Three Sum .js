function main (input) {
  const lines = input.trim().split('\n');
  const N = parseInt(lines[0]);
  const arr = lines[1].split(' ').map(Number);
  arr.sort((a,b) => a-b);
  
  let count = 0;

  for(let i = 0; i < N - 2; i++){
    let left = i + 1;
    let right = N - 1;

    while(left < right){
        let sum = arr[i] + arr[left] + arr[right];

        if(sum === 0){
            count++;
            left++;
            right--;
        }else if(sum < 0){
            left++;
        }else{
            right--;
        }
    }
  }
  console.log(count)
    
}