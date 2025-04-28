
function multiplyMatrices(A, B) {
      const m = A.length;
      const n = A[0].length;
      const nB = B.length;
      const p = B[0].length;
  
      
      if (n !== nB) {
          throw new Error("Кількість стовпців A повинна дорівнювати кількості рядків B.");
      }
  

      const C = Array.from({ length: m }, () => Array(p).fill(0));
  
     
      for (let i = 0; i < m; i++) {
          for (let j = 0; j < p; j++) {
              for (let k = 0; k < n; k++) {
                  C[i][j] += A[i][k] * B[k][j];
              }
          }
      }
  
      return C;
  }
  

  const A = [
      [1, 2, 3],
      [4, 5, 6]
  ];
  
  const B = [
      [7, 8, 9],
      [10, 11, 12],
      [13, 14, 15]
  ];
  

  const result = multiplyMatrices(A, B);
  
  console.log("Результат множення матриць:");
  console.table(result);