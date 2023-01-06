function bubbleSort(arr){
  for(var i=0; i < arr.length; i++){
    for(var j=0; j < arr.length; j++){
      if(arr[j] > arr[j+1])
        [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
    }
  }
  return arr;
}

function bubbleSortV2(arr){
  for(let i= arr.length; i > 0; i--){
    for(let j = 0; j < i-1; j++){
      if(arr[j] > arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr;
}

console.log(bubbleSort([3,2,5,4,1]))

console.log("bubble sort updated:", bubbleSortV2([3,2,5,4,1]))