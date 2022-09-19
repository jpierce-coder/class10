
function addTwoExceptToOddNumbers(numbers) {
  for (let i = 0; i <= numbers; i++) {
    if (i % 2 === 0) {
      i = i + 2;
    } else {
      i++;
    }
  }
}

console.log(addTwoExceptToOddNumbers([1,2,3,4,5])); // [1,4,3,6,5]
// addTwoExceptToOddNumbers([101,1,4,10]); // [101,1,6,12];