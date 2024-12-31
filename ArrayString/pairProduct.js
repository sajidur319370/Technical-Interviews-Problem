// n = length of array
// Time: O(n)
// Space: O(n)

const pairProduct = (numbers, targetProduct) => {
  const previousNums = {};
  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i];
    const complement = targetProduct / num;

    if (complement in previousNums) return [previousNums[complement], i];

    previousNums[num] = i;
  }
};
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 5)); // -> [4, 5]
console.log(pairProduct([4, 6, 8, 2], 16)); // -> [2, 3]
