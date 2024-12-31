// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(n)

const graph1 = {
  0: ["8", "1", "5"],
  1: ["0", "6"],
  5: ["0", "6", "8"],
  6: ["1", "5"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
};

const nodeCount = (graph, source, visited) => {
  let element = 1;
  if (visited.has(source)) return 0;
  visited.add(source);
  for (let neighbor of graph[source]) {
    element += nodeCount(graph, neighbor, visited);
  }
  return element;
};

const largestComponentsCount = (graph) => {
  visited = new Set();
  let maxElement = 0;
  for (const node in graph) {
    const count = nodeCount(graph1, String(node), visited);
    if (count > maxElement) {
      maxElement = count;
    }
  }
  return maxElement;
};
largestComponentsCount(graph1);
console.log("Elements of Largest Component : ", largestComponentsCount(graph1));
