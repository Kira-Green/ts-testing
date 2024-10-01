export const pairwise = (arr:number[], arg:number) => {
    let pairIndices:number[] = [];
    // Check every pair
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        // Exclude pairs that contain previously paired elements
        if (arr[i] + arr[j] == arg
            && !pairIndices.includes(i)
            && !pairIndices.includes(j)) {
          pairIndices.push(i, j);
          break;
        }
      }
    }
  
    return pairIndices.reduce((sum, curr, index) => sum + curr, 0);
  }
   
