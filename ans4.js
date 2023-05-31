let nums = [1,3,5,6], target = 5
var indexvalue = function(nums, target) {
    for(let i =0;i<nums.length;i++){
        if(nums[i] >= target)   return i;
    }
    return nums.length;
};
console.log(indexvalue(nums,target))