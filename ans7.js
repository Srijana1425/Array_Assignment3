
let nums = [0,1,3,50,75], lower = 0, upper = 99

var findMissingRanges = function(nums, lower, upper) {
    const result = []
    let prev = lower - 1;
    for (let i = 0; i <= nums.length; i++) {
        // current number to compare to prev
        let curr = (i < nums.length) ? nums[i] : upper + 1;
        if (prev + 1 <= curr - 1) {
            result.push(prev + 1===curr - 1?`${prev + 1}`:`${prev + 1}->${curr - 1}`);
        }
        prev = curr;
    }
    return result 
};
console.log(findMissingRanges (nums, lower, upper))