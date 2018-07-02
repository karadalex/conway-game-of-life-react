export function clearGrid() {
  var grid = new Array(10);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(30).fill(false);
  }
  return {
    grid
  }
}