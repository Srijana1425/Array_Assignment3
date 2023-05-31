let nums = [1,0,-1,0,-2,2], target = 0
var quadruplets = function(nums, target) {

    nums.sort((a,b)=>(a-b));
    let res=[];  
    
    for(let a=0; a<nums.length-3; a++){
        for(let b=a+1; b<nums.length-2; b++){
            let c=b+1;
            let d=nums.length-1;
            while(b<c && c<d){
                if(nums[a]+nums[b]+nums[c]+nums[d]==target){
                    res.push([nums[a], nums[b], nums[c], nums[d]]);
                    
                    while(nums[c]==nums[c+1]) c++;
                    while(nums[d]==nums[d-1]) d--;

                    c++;
                    d--;
                    
                }else if (nums[a]+nums[b]+nums[c]+nums[d]<target){
                    c++;
                    
                } else{
                    d--;
                }
            } 
            while(nums[b]==nums[b+1]) b++;
        }
         while(nums[a]==nums[a+1]) a++;      

    }return res;
};
console.log(quadruplets (nums, target))