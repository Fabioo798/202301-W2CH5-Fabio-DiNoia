import { arr, rows } from './matris.js';

// Function that generate a 1 and 0 in a random way inside the matrix
export const createMatrix = (arr, rows) => {
  for (let i = 0; i < rows; i++) {
    arr[i] = [];
    for (let j = 0; j < rows; j++) {
      const fillMatrix = Math.floor(Math.random() * 2);
      arr[i][j] = fillMatrix;
    }
  }

  return arr;
};

let firstMatrix = createMatrix(arr, rows);
console.table(firstMatrix);

// Function that check for the surrounding element of each element of the matrix and return a counter
export const countSurroundings = (firstMatrix, i, j) => {
  const row = firstMatrix.length;
  const col = firstMatrix[0].length;
  const dirs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  let count = 0;
  for (let k = 0; k < dirs.length; k++) {
    const x = i + dirs[k][0];
    const y = j + dirs[k][1];
    if (x >= 0 && x < row && y >= 0 && y < col && firstMatrix[x][y] === 1)
      count++;
  }

  return count;
};

// Function that loop the surrounding and change the state of the elements(from the next round) based on conditions;
export const generateNextIteration = (firstMatrix) => {
  const row = firstMatrix.length;
  const col = firstMatrix[0].length;
  const secondMatrix = [];

  for (let i = 0; i < row; i++) {
    secondMatrix[i] = [];
    for (let j = 0; j < col; j++) {
      const surrounding = countSurroundings(firstMatrix, i, j);
      if (firstMatrix[i][j] === 1 && (surrounding < 2 || surrounding > 3))
        secondMatrix[i][j] = 0;
      else if (firstMatrix[i][j] === 0 && surrounding === 3)
        secondMatrix[i][j] = 1;
      else secondMatrix[i][j] = firstMatrix[i][j];
    }
  }

  return secondMatrix;
};

// Function that check if the new round has been equal to the one before (no more changes, therefore game over)
export const matricesAreEqual = (matrix1, matrix2) => {
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[0].length; j++) {
      if (matrix1[i][j] !== matrix2[i][j]) {
        return false;
      }
    }
  }

  return true;
};

// Interval of time where the functions are called;
export const intervalId = setInterval(() => {
  const nextMatrix = generateNextIteration(firstMatrix);
  if (matricesAreEqual(firstMatrix, nextMatrix)) {
    clearInterval(intervalId);
    // Console.log("The game has ended, there are no more changes!");
  } else {
    firstMatrix = nextMatrix;
    console.table(firstMatrix);
  }
}, 1000);


