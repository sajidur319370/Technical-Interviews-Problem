const graph1 = {
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
};
const explore = (graph, source, visited) => {
  if (visited.has(source)) return false;
  visited.add(source);
  for (let neighbor of graph[source]) {
    explore(graph, neighbor, visited);
  }
  return true;
};

const connectedComponentsCount = (graph) => {
  visited = new Set();
  let count = 0;
  for (const node in graph) {
    if (explore(graph, node, visited)) count++;
  }
  return count;
};

console.log(
  "Number of connected components: ",
  connectedComponentsCount(graph1)
);
