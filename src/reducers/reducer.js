// Available action types
import {
  CHANGE_CELL_STATE,
  GO_TO_PREVIOUS_STATE,
  GO_TO_NEXT_STATE
} from '../actions';
import { calculateNextState } from './next-state';


// Initialize 50x100 empty grid
// false: cell is dead
// true: cell is alive
const initialState = {
  grid: new Array(50).fill(new Array(100).fill(false))
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
    default:
      return state;
  }
}