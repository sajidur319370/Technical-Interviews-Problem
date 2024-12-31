// n = number of groups
// m = max num found in any group
// Time: O(n*m)
// Space: O(n*m)

const uncompress = (s) => {
  let result = [];
  const numbers = "0123456789";
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j += 1;
    } else {
      const num = Number(s.slice(i, j));
      for (let count = 0; count < num; count += 1) {
        result.push(s[j]);
      }
      j += 1;
      i = j;
    }
  }
  return result.join("");
};
console.log("Uncompress Result:", uncompress("2c3a1t")); // -> 'ccaaat'
console.log("Uncompress Result:", uncompress("3n12e2z")); // -> 'nnneeeeeeeeeeeezz'
