const removeElement = function(nums, val) {
    const n = nums.length;
    console.log("Total length: ", n)
    let k = 0;
    for(let i = 0; i < n; i++){
        console.log("Current number: ", nums[i]);
        if(nums[i] === val){
            nums[i] =  1000;
            continue;
        }
        k++
    }
    nums.sort((a, b)=> a -b);
    return k
};

const NumsArr =  [3,2,3,2];
const val = 3
const K =  removeElement(NumsArr, val);

console.log(NumsArr);
