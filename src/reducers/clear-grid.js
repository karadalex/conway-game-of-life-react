export function clearGrid() {
  var grid = new Array(50);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(100).fill(false);
  }
  return {
    grid
  }
}