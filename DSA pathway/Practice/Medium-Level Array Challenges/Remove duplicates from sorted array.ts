
function removeDuplicate (arr: any[]){
  let j = 0;
  for(let i = 1; i < arr.length; i++){
    if(arr[j] === arr[i] ){
        continue;
    }
    j += 1;
    arr[j] = arr[i]
  }

  arr.fill('_', j+1, arr.length)
  console.log(arr)
}

const array3 = [1, 1, 2, 2, 3]

removeDuplicate(array3);

