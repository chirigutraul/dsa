// This pattern uses objects or sets to collect values/frequencies of values.
// This can often avoid the need for nested loops or O(N^2) operations with array/strings.

// write a function that takes two arrays and returns true
// if the second array contains the first array elements, but squared
// frequency matters


// Problem solving not using the pattern
function same_without_pattern(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  }

  for(let i=0; i<arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] ** 2)

    if(correctIndex === -1){ // if squared does not exist, we return false
      return false
    }

    arr2.splice(correctIndex, 1) // removing the checked element

    return true; 
  }
}

const arr1 = [1,2,3]
const arr2 = [9,4,1]

function same_with_pattern(arr1, arr2){
  if(arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = ( frequencyCounter1 || 0 ) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = ( frequencyCounter2 || 0 ) + 1;
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)

  for (let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)) return false;
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  return true;
}

console.log(same_with_pattern(arr1,arr2))