/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const n = nums.length;
    const map1 = new Map();

    for(let i = 0; i < n; i++){
        let currentNumber = nums[i];
        let neededNumber = target - currentNumber;

        if(map1.has(neededNumber)){
            return [i, map1.get(neededNumber)];
        }
        map1.set(currentNumber, i);
    }
};