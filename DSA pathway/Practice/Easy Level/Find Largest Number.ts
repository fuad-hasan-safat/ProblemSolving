const arr = [3, 5, 1, 8, 4]

const largestNum = arr.sort()[arr.length -1]

console.log("largest num is : ", largestNum)

 // or

const arr1 = [3, 5, 1, 8, 4]
let largestNum1 = arr1[0];

for (let index = 1; index < arr1.length; index++) {
    let currentNumber = arr1[index];
    if(currentNumber > largestNum1) largestNum1 = currentNumber
}
console.log("largest num is : ", largestNum1)
