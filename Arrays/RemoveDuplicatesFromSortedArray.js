/* 
https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=problem-list-v2&envId=array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
**/

var removeDuplicates = function(nums) {
    var i =0;
    var j = 1;
    var k = nums.length;
    var t = 0;
    if(nums.length == 1){
        return 1;
    }
    while(i<nums.length-1){
        if(nums[i] == nums[j]){  
            nums[j] = 101;
            k--;
            j++;
        } else {
            i = j;
            j++;
        }
    }

    for(var i=0; i<nums.length-1; i++){
        for(var j=i+1;j<nums.length; j++){
            if(nums[i]>nums[j]){
                t = nums[i];
                nums[i] = nums[j];
                nums[j] = t;
            }
        }
    }
    return k;
}