/**
https://leetcode.com/problems/pascals-triangle-ii/?envType=problem-list-v2&envId=array

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.
 */


var getRow = function(rowIndex) {
    var outarr = [1,1];
    var temp =[];
    if(rowIndex == 0){
        return [1];
    }
    else if(rowIndex == 1){
        return [1,1];
    }
    else{
        for(var i=1; i<rowIndex; i++){
            temp = [];
            temp.push(outarr[0]);
            for(var j=0; j<outarr.length-1; j++){
                temp.push(outarr[j]+outarr[j+1])
            }
            temp.push(outarr[outarr.length-1]);
            outarr = temp;
        }
    }
    return outarr;
};