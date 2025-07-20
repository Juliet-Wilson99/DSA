/**
https://leetcode.com/problems/pascals-triangle/?envType=problem-list-v2&envId=array

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

 */

var generate = function(numRows) {
    var outarr = [[1],[1,1]];
    var temp =[];
    var t =0;
    var temparr = [];
    if(numRows == 1){
        return [[1]];
    }
    else if (numRows == 2){
        return outarr;
    }
    else{
        for(var i=1; i<numRows-1; i++){
            temp= [];
            temparr = outarr[i];
            temp.push(temparr[0]);
            for(var j=0; j<temparr.length-1; j++){
                t = temparr[j]+temparr[j+1];
                temp.push(t);
            }
            temp.push(1);
            outarr.push(temp);
        }
        return outarr;
    }
};