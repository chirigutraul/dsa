// javascript methods that are using linear search:
// indexOf, includes, find, findIndex

// write a function that accepts an array and a value as arguments
// check for the value in that array
// if the value is in that array, return index, else return -1

// ([1,2,3,4,5,6,7] , 3) should return 2;
// O(n)
function linearSearch(arr, n){
  for(let i = 0; i < arr.length-1; i++){
    if(arr[i] === n) return i;
  }
  return -1;
}

console.log(linearSearch([1,2,3,4,5,6,7] , 3))