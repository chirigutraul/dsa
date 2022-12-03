// write a function called countUniqueValues
// which accepts a sorted array and counts 
// the unique values in the array
// countUniqueValues([1,1,1,1,1,2])  -> 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,12,12,13,13,13]) --> 7
// countUniqueValues([]) -> 0;
// countUniqueValues ([-2,-1,-1,0,1]) -> 4

function countUniqueValues(numbersArray){
  let i = 0;

  if(numbersArray.length === 0) return `there are ${i} unique values in the numbers array`;

  for(let j = 1; j<numbersArray.length; j++){
    if(numbersArray[i] !== numbersArray[j]){
      i++;
      numbersArray[i] = numbersArray[j];
    }
  }

  return `there are ${i+1} unique values in the numbers array.`;
}

let numberArray = []

console.log(countUniqueValues(numberArray))