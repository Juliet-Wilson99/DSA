/**
https://leetcode.com/problems/single-number/description/?envType=problem-list-v2&envId=array 

 Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

 */

 var singleNumber = function(nums) {
    let map = new Map();
    for(var i=0; i<nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i])+1);
        }
        else{
            map.set(nums[i], 1);
        }
    }

   for (const [key, value] of map) {
        if (value === 1) {
            return key;
        }
    }
};