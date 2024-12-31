// n = length of longest string of value
// m = # of unique tokens
// Time: ~O(n^m)
// Space: ~O(n^m)

const tokenTransform = (s, token) => {
  let result = [];
  let i = 0;
  let j = 1;
  while (i < s?.length) {
    if (s[i] !== "$") {
      result.push(s[i]);
      i++;
      j = i + 1;
    } else if (s[j] !== "$") {
      j++;
    } else {
      const key = s.slice(i, j + 1);
      const value = token[key];
      const evaluated = tokenTransform(value, token);
      token[key] = evaluated;
      result.push(evaluated);
      i = j + 1;
      j = i + 1;
    }
  }
  return result.join("");
};

const tokens1 = {
  $LOCATION$: "$ANIMAL$ park",
  $ANIMAL$: "dog",
};
const transform1 = tokenTransform(
  "Walk the $ANIMAL$ in the $LOCATION$!",
  tokens1
);
// -> 'Walk the dog in the dog park!'

const tokens2 = {
  $ADJECTIVE_1$: "quick",
  $ADJECTIVE_2$: "eager",
  $ADVERBS$: "$ADJECTIVE_1$ly and $ADJECTIVE_2$ly",
  $VERB$: "hopped $DIRECTION$",
  $DIRECTION$: "North",
};
const transform2 = tokenTransform(
  "the $ADJECTIVE_1$ fox $ADVERBS$ $VERB$ward",
  tokens2
);
// -> 'the quick fox quickly and eagerly hopped Northward'

console.log(transform1);
console.log(transform2);
