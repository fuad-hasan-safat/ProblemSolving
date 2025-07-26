
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0];
    
    let maxEnding = nums[0];

    for (let i = 1; i < nums.length; i++) {
        
        maxEnding = Math.max(maxEnding + nums[i], nums[i]);
        res = Math.max(res, maxEnding);
    }
    return res;
};