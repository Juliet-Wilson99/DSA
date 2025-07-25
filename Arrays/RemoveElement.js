/*
https://leetcode.com/problems/remove-element/description/?envType=problem-list-v2&envId=array

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
**/

var removeElement = function(nums, val) {
    let t = 0;
    let k = 0;
    for(var i =0; i<nums.length; i++){
        if(nums[i] == val){
            nums[i] = 101;
        }
        else{
            k++;;
        }
    }

    for(var i =0; i<nums.length-1; i++){
        for(var j =i+1; j<nums.length; j++){
            if(nums[i]>nums[j]){
                t = nums[i];
                nums[i] = nums[j];
                nums[j] = t;
            }
        }
    }
    return k;
};