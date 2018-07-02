export function changeCellState(x, y) {
  return {
    type: "CHANGE_CELL_STATE",
    x,
    y
  }
}