const inputArray =  [10, 4, 3, 50, 23]

// const secondLargestArray = inputArray.sort((a,b) => a - b)
// console.log(secondLargestArray)

// console.log(secondLargestArray[secondLargestArray.length - 2])


let first = -Infinity, second = -Infinity;

for (let num of inputArray) {
  if (num > first) {
    second = first;
    first = num;
  } else if (num > second && num !== first) {
    second = num;
  }
}

console.log(second);