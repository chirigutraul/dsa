function sumUp(n){
  if(n===1) return 1;
  return n * sumUp(n-1)
}

console.log(sumUp(3))