
export function symmetricDifference (...args:any) {
    
    // helper function return items in arr1 that aren't in arr2
    const getDiff=(arr1:number[], arr2:number[])=>{
    function filterFunction(arr1:number[], arr2:number[]){
        return arr1.filter(item => arr2.indexOf(item)=== -1)
    }
    return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1))
    };

    const summary:number[] = args.reduce(getDiff, [])
   
    const unique: number[] = summary.filter((elem, index, arr) => index ===arr.indexOf(elem))
    return unique;
}
