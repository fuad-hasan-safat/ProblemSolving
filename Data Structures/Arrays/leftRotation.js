
/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
    // Write your code here
    
    while(d!=0){
        const temp = arr[0];
        const n = arr.length;
        for (let i = 1; i < n; i++) {
            arr[i-1] = arr[i];
        }
        arr[n-1] = temp;
        d--;
    }
    
    return arr;

}
