let nums = [1,2,3]
var nextPermutation = function(nums) {
    let index;
    for(let i = nums.length - 1; i >= 1; i--) {
        if(nums[i] > nums[i-1]) {
            index = i;
            break;
        }
    }
    if(index === undefined) {
        nums.sort((a,b) => a>b ? 1 : -1);
        return;
    }
    let smallestIndex = index
    for(let i=index; i< nums.length;i++) {
        if(nums[index - 1] < nums[i] && nums[i] < nums[smallestIndex]) {
            smallestIndex = i
        }
    }
    const temp = nums[smallestIndex]
    nums[smallestIndex] = nums[index - 1]
    nums[index - 1] = temp;
    for(let i = index; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] > nums[j]) {
                const temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp;
            }
        }
    }
    return nums;
};
console.log(nextPermutation(nums))




