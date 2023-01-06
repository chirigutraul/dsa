// binary search is much faster than linear search
// but it only works on sorted arrays


const states = ["Alabama", "Alaska", "California", "Idaho", "Indiana", "Kentucky",
"Mississippi", "New Mexico", "Texas", "Washington"]

function binarySearch(arr, value){  
  let left = 0;
  let right = arr.length-1;

  while(left <= right){
    let middle = Math.floor((left+right)/2);

    if(value < arr[middle]) right = middle - 1;
    else if(value > arr[middle]) left = middle + 1;
    
    else return middle;
  }

  return -1;
}

console.log(binarySearch(states,"California"))