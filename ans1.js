let nums = [-1,2,1,-4], target = 1
var Sum = function(nums, target) {
    nums.sort((a,b) => a-b)
    let closestSum = Number.MAX_VALUE
    for(let i=0; i<nums.length-2; i++){
        let l = i+1, r = nums.length-1, sum = 0
        while(l < r){
            sum = nums[i] + nums[l] + nums[r]
            if(Math.abs(target - sum) < Math.abs(closestSum))    closestSum = target - sum
            if(sum < target)    l++
            else    r--
        }
    }
    return target - closestSum
};
console.log(Sum(nums, target))