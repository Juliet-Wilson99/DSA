/**
 https://leetcode.com/problems/merge-sorted-array/description/?envType=problem-list-v2&envId=array

 You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

var merge = function(nums1, m, nums2, n) {

    for(var i=m; i<m+n; i++){
        nums1[i] = nums2[i-m];
    }
    var t =0;
    for(var i=0; i<nums1.length-1; i++){
        for(var j=i+1; j<nums1.length; j++){
            if(nums1[i]>nums1[j]){
                t = nums1[i];
                nums1[i]= nums1[j];
                nums1[j] = t;
            }
        }
    }
};