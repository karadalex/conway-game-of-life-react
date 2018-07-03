export function calculateNextState(grid) {
  // It's very important not to mutate the grid,
  // so that Game of Life's rules are calculated correctly
  var nextStateGrid = new Array(grid.length);
  for (let i = 0; i < grid.length; i++) {
    nextStateGrid[i] = new Array(grid[i].length).fill(false);
  }
  // Check rules everywhere, except boundaries
  for (let i = 1; i < grid.length-1; i++) {
    for (let j = 1; j < grid[i].length-1; j++) {
      let neighbors = 0;
      if (grid[i-1][j-1]) neighbors++;
      if (grid[i-1][j]) neighbors++;
      if (grid[i-1][j+1]) neighbors++;
      if (grid[i][j-1]) neighbors++;
      if (grid[i][j+1]) neighbors++;
      if (grid[i+1][j-1]) neighbors++;
      if (grid[i+1][j]) neighbors++;
      if (grid[i+1][j+1]) neighbors++;

      // RULE 1: 
      // Any live cell with fewer than two live neighbors  
      // dies, as if by under population.
      if (grid[i][j] && (neighbors < 2)) nextStateGrid[i][j] = false;

      // RULE 2: 
      // Any live cell with two or three live neighbors 
      // lives on to the next generation.
      if (grid[i][j] && ((neighbors===2) || (neighbors===3))) nextStateGrid[i][j] = true;

      // RULE 3:
      // Any live cell with more than three live neighbors 
      // dies, as if by overpopulation.
      if (grid[i][j] && (neighbors > 3)) nextStateGrid[i][j] = false;

      // RULE 4:
      // Any dead cell with exactly three live neighbors becomes a 
      // live cell, as if by reproduction.
      if (!grid[i][j] && (neighbors === 3)) nextStateGrid[i][j] = true;
    }
  }
  return nextStateGrid;
}