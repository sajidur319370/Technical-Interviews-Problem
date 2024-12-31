// r = number of rows
// c = number of columns
// Time: O(rc)
// Space: O(rc)
const grid1 = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];
const grid2 = [
  ["L", "W", "W", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];
const grid3 = [
  ["L", "L", "L"],
  ["L", "L", "L"],
  ["L", "L", "L"],
];

const minimumIsland = (grid) => {
  const visited = new Set();
  let minSize = Infinity;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const count = explore(grid, row, col, visited);
      if (minSize > count && count > 0) minSize = count;
    }
  }
  return minSize;
};

const explore = (grid, row, col, visited) => {
  const rowInbounds = row >= 0 && row < grid.length;
  const colInbounds = col >= 0 && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return 0;

  if (grid[row][col] == "W") return 0;

  const position = row + "," + col;
  if (visited.has(position)) return 0;
  visited.add(position);

  let size = 1;
  size += explore(grid, row - 1, col, visited);
  size += explore(grid, row + 1, col, visited);
  size += explore(grid, row, col - 1, visited);
  size += explore(grid, row, col + 1, visited);

  return size;
};
console.log("Minimum Island Size:(grid1)-> ", minimumIsland(grid1)); // -> 2
console.log("Minimum Island Size:(grid2)-> ", minimumIsland(grid2)); // -> 1
console.log("Minimum Island Size:(grid3)-> ", minimumIsland(grid3)); // -> 9
