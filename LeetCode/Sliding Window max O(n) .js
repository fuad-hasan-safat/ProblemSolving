var maxSlidingWindow = function(nums, k) {
    const deque = [];  // store indices
    const res = [];

    for (let i = 0; i < nums.length; i++){
        if(deque.length && deque[0] <= i-k){
            deque.shift();  
        }
        while(deque.length && nums[deque[deque.length - 1]] < nums[i]){
            deque.pop()
        }

        deque.push(i);

        if(i >= k -1){
            res.push(nums[deque[0]])
        }
    }

    return res;
};