// n = length of string
// Time: O(n)
// Space: O(n)

const tokenReplace = (s, token) => {
  let result = [];
  let i = 0;
  let j = 1;
  while (i < s.length) {
    if (s[i] !== "$") {
      result.push(s[i]);
      i++;
      j = i + 1;
    } else if (s[j] !== "$") {
      j++;
    } else {
      const key = s.slice(i, j + 1);
      result.push(token[key]);
      i = j + 1;
      j = i + 1;
    }
  }
  return result.join("");
};

const tokens1 = {
  $LOCATION$: "park",
  $ANIMAL$: "dog",
};
const replace1 = tokenReplace("Walk the $ANIMAL$ in the $LOCATION$!", tokens1);
// -> 'Walk the dog in the park!'

const tokens2 = {
  $ADJECTIVE$: "quick",
  $VERB$: "hopped",
  $DIRECTION$: "North",
};
const replace2 = tokenReplace(
  "the $ADJECTIVE$ fox $VERB$ $ADJECTIVE$ly $DIRECTION$ward",
  tokens2
);
// -> 'the quick fox hopped quickly Northward'

console.log(replace1);
console.log(replace2);
