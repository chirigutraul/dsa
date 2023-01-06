// write a function called sumZero which accepts 
// a sorted array of integrers
// the function should find the first pair of two numbers
// where the sum is 0

function sumZero(arr){
  let left = 0;
  let right = arr.length - 1;
  
  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }

  return `There is no pair of two numbers in ${arr} that have the sum = 0`
}

let array = [-4,-2,0,1,3,4];

console.log(sumZero(array))