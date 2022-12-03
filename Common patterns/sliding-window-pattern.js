// write a function called maxSubarraySum
// which accepts an array of integers and a number called n
// the function should calculate the maximum sum of n consecutive elements in the array

// maxSubarraySum([2,3,3,11,7,2,3,1,2] , 2)   --> 18
// maxSubarraySum([2,3,3,11,7,2,3,1,2] , 3)   --> 21

// we assign the current sum on 2+3+3 = 8

// then from the current sum, we substract 2 
// that means we substract arr[i]

// then from the current sum we add 11
// that means we add arr[i] + n

function maxSubarraySum(arr, n){
  let maxSum = 0 ;
  let currSum = 0;

  if(arr.length === 0) return 0;

  for(let i = 0; i<n;i++) maxSum += arr[i];
  currSum = maxSum;

  for( let i=0; i<arr.length; i++){
    currSum = currSum - arr[i] + arr[i+n];
    if(currSum > maxSum) maxSum = currSum;
  }

  return `The maximum sum out of ${n} numbers is : ${maxSum}`;
}

console.log(maxSubarraySum([3,2,1,0,7] , 3))