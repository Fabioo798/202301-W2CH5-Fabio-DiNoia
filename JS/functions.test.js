import {
  createMatrix,
  countSurroundings,
  generateNextIteration,
  matricesAreEqual,
} from './functions.js';
import { arr, rows } from './matris.js';


  // BeforeEach(() => {
  //   jest.useFakeTimers();
  // });

  // afterEach(() => {
  //   jest.clearAllTimers();
  // })

  // Test createMatrix function
  describe('given an array', () => {
    describe('when createMatrix is called', () =>{
      test('creates a matrix with the specified number of rows', () => {
        const matrix = createMatrix(arr, rows);
        expect(matrix.length).toBe(rows);
        });
      });
    });



  // Test countSurroundings function
  describe('given an array', () => {
    describe('when createMatrix is called', () =>{
      test('countSurroundings function counts the number of surrounding elements with value 1', () => {
            const matrix = [
          [0, 1, 0],
          [1, 1, 1],
          [0, 1, 0],
        ];
        const i = 1;
        const j = 1;

        expect(countSurroundings(matrix, i, j)).toBe(4);
      });
    });
  });

  // Test generateNextIteration function
  describe('given an array', () => {
    describe('when createMatrix is called', () =>{
      test('generateNextIteration function generates the next iteration of the matrix', () => {
        const matrix = [
          [0, 1, 0],
          [1, 0, 1],
          [0, 0, 0],
        ];
        const nextMatrix = generateNextIteration(matrix);

        expect(nextMatrix).not.toBe(matrix);
        expect(nextMatrix[0][1]).toBe(1);
        expect(nextMatrix[1][0]).toBe(0);
      });
    });
  });

  // Test matricesAreEqual function
describe('given an array', () => {
    describe('when createMatrix is called', () =>{
      test('matricesAreEqual function returns true if matrices are equal, false otherwise', () => {
        const matrix1 = [
          [0, 1, 0],
          [1, 1, 1],
          [0, 1, 0],
        ];
        const matrix2 = [
          [0, 1, 0],
          [1, 1, 1],
          [0, 1, 0],
        ];
        const matrix3 = [
          [0, 1, 0],
          [1, 0, 1],
          [0, 1, 0],
        ];

        expect(matricesAreEqual(matrix1, matrix2)).toBe(true);
        expect(matricesAreEqual(matrix1, matrix3)).toBe(false);
      });
    });
  });


// Jest.useFakeTimers();

// describe('give a setInterval', () => {
//   let firstMatrix;

//   beforeEach(() => {
//     firstMatrix = createMatrix([], 3);
//   });

//   it('should end the game when matrices are equal', () => {
//     const nextMatrix = generateNextIteration(firstMatrix);

//     jest.advanceTimersByTime(1000);

//     expect(setInterval).toHaveBeenCalledTimes(1);
//     expect(clearInterval).toHaveBeenCalledWith(intervalId);
//     expect(console.log).toHaveBeenCalledWith("The game has ended, there are no more changes!");
//   });
// });