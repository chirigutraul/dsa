// the built in .sort() method, takes elements
// then transform them into unicode strings
// and then sort those by their unicode strings order

// console.log([1,44,15,4,5].sort())
// this returns [1,15,4,44,5]

function ascendingSort(num1,num2){
  return num1 - num2
}

function descendingSort(num1,num2){
  return num2 - num1;
}

function sortByStringLength(str1, str2){
  return str1.length - str2.length
}

console.log([1,5,2,3,4].sort(ascendingSort))
console.log([1,5,2,3,4].sort(descendingSort))

console.log(["test", "test2341", "test2","test 1"].sort(sortByStringLength))