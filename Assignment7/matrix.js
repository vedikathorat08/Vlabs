function multiplyMatrices(A, B) {
    let rowsA = A.length;
    let colsA = A[0].length;
    let rowsB = B.length;
    let colsB = B[0].length;

    if (colsA !== rowsB) {
        return "Matrix multiplication is not possible.";
    }

    let result = new Array(rowsA);
    for (let i = 0; i < rowsA; i++) {
        result[i] = new Array(colsB).fill(0);
    }

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return result;
}

// Example usage:
let A = [
    [1, 2],
    [3, 4],
    [5, 6]
];

let B = [
    [7, 8],
    [9, 10]
];

console.table(multiplyMatrices(A, B));
