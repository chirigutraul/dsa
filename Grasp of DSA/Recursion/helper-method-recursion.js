function collectOddValues(arr){
  let result = []

  function collectOdd(numbersArray){
    if(numbersArray.length === 0 ) return; 

    if(numbersArray[0] % 2 !== 0)
      result.push(numbersArray[0])
    
    collectOdd(numbersArray.slice(1))
  }

  collectOdd(arr);

  return result;
}

console.log(
  collectOddValues([1,2,3,4,5,6,7,8,9,10,11,12])
)