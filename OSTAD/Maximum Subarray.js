function main (input) {
    const lines = input.trim().split('\n');
    const N = parseInt(lines[0]);
    const nums = lines[1].split(' ').map(Number);
    let res = nums[0];
    
    let maxEnding = nums[0];

    for (let i = 1; i < N; i++) {
        
        maxEnding = Math.max(maxEnding + nums[i], nums[i]);
        res = Math.max(res, maxEnding);
    }
    
   console.log(res); 
}
