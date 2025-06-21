/*
https://leetcode.com/problems/search-insert-position/description/?envType=problem-list-v2&envId=array

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
**/

var searchInsert = function(nums, target) {
    var start = 0;
    var end = nums.length-1;
    var mid = 0;
    var pos = 0;

    while(start<=end){
        mid = ((start+end)/2) >> 0;
        console.log(start, mid, end);
        if(target == nums[mid]){
            return mid;
        }
        else if(target > nums[mid]){
            start = mid+1;
            pos = start;

        }
        else{
            end = mid-1;
            pos= end;
        }
    }
    if(pos<0)
    return 0;

    return pos;
};