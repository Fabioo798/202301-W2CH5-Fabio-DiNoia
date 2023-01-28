export const createMatrix = (arr, row, SquareCells) => {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < row; j++) {
      const fillMatrix = new SquareCells();
      arr[i][j] = fillMatrix;
      
    }
  }

  return arr;
};
