// this pattern involves dividing a data set
// into smaller chunks and then repeating the process with
// a subset of data
// as well as dividing the problem into smaller chunks.

// write a function called search that accepts a value and a sorted array.
// and returns the index where the value passed to the function
// is located. if the value is not found, return -1;

// search([1,3,4,16,20,24,28,30,35,40,44], 35) should return 8;
// search([1,3,4,16,20,24,28,30,35,40,44], 55) should return -1;
// it should look at the middle element, which here is 24,
// if it's greater, it should change the middle to the higher end
// if it's lower, it should change the middle to the lower end
// then repeat the process until you eventually find a number that is equal to the searched one
// if we find the number, we return it's index, else we return -1
function search(arr, number){
  let min = 0;
  let max = arr.length-1;

  while(min <= max) {
    let mid = Math.floor((min+max) / 2);

    if(number < arr[mid]) max = mid-1;
    else if(number > arr[mid]) min = mid+1;
    else return mid;
  }

  return -1;
}

console.log(search([1,3,4,16,20,24,28,30,35,40,44], 3))