// Available action types
export const CHANGE_CELL_STATE = "CHANGE_CELL_STATE";
export const GO_TO_PREVIOUS_STATE = "GO_TO_PREVIOUS_STATE";
export const GO_TO_NEXT_STATE = "GO_TO_NEXT_STATE";
export const CLEAR_GRID = "CLEAR_GRID";

// Action creators
export function changeCellState(x, y) {
  return {
    type: CHANGE_CELL_STATE,
    x,
    y
  }
}

export function goToPreviousState() {
  return {
    type: GO_TO_PREVIOUS_STATE
  }
}

export function goToNextState() {
  return {
    type: GO_TO_NEXT_STATE
  }
}

export function clearGrid() {
  return {
    type: CLEAR_GRID
  }
}