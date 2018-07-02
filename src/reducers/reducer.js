// Available action types
import {
  CHANGE_CELL_STATE,
  GO_TO_PREVIOUS_STATE,
  GO_TO_NEXT_STATE,
  CLEAR_GRID
} from '../actions';
import { calculateNextState } from './next-state';


// Initialize 50x100 empty grid
// false: cell is dead
// true: cell is alive
var initialGrid = new Array(10);
for (let i = 0; i < initialGrid.length; i++) {
  initialGrid[i] = new Array(30).fill(false);
}
const initialState = {
  grid: initialGrid
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CELL_STATE:
      var grid = [...state.grid];
      var x = action.x;
      var y = action.y;
      grid[y][x] = !grid[y][x];
      return {
        grid
      }
    case GO_TO_NEXT_STATE:
      return {
        grid: calculateNextState(state.grid)
      }
    case CLEAR_GRID:
      return {
        ...initialState
      }
    default:
      return state;
  }
}