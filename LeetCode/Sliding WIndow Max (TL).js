var maxSlidingWindow = function(nums, k) {
    const answer = []
    for(let i = 0; i <= nums.length - k; i++){
        let subArray = nums.slice(i, i+k)
        answer.push(Math.max(...subArray))
    }

    return answer;
};