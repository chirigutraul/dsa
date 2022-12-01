function arraySum(numbers) {
  let result = 0;
  numbers.forEach(number => result+=number);
  return result;
}
const numbers = [1,2,3]
console.log(arraySum(numbers))