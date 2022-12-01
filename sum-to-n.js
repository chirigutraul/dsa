function sumToN(n){
  console.time("time for run:")
  let result = 0;
  for(let i=1; i<=n; i++){
    result +=i;
  }
  console.timeEnd("time for run:")
  return(result);
}


console.log(sumToN(5))