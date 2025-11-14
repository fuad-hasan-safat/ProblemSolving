const mainArray = [1, 2, 3, 4]
let reverseArray = []

let index2 = 0;
for(let index =  mainArray.length - 1 ; index >= 0; index--){
    reverseArray[index2] = mainArray[index]
    index2 += 1;
}

console.log(reverseArray)