let nums = [2,2,1]
var singleNumber = function(nums) {
    let set = new Set()
    
    for (let num of nums) {
        if (set.has(num)) {
            set.delete(num)
        } else {
            set.add(num)
        }
    }
    
    for (let num of set) {
        return num
    }

};
console.log(singleNumber(nums))
