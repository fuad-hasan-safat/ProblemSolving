

/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

let init_arr = function init_arr(arr,n,query){
    
    let lastAnswer = 0;
    let result = [];
    
    let y = null;
    for(let i=0; i < query.length; i++){
        let idx = 0;

            
        if (query[i][0] === 1){
            
            idx = (query[i][1] ^ lastAnswer) % n;
            y = query[i][2];
            arr[idx].push(y);
            
        } else {

            idx = (query[i][1] ^ lastAnswer) % n;

            y = query[i][2];

            lastAnswer = arr[idx][y % arr[idx].length];
            result.push(lastAnswer);
        }
        
    }
    return result
    
}

function dynamicArray(n, queries) {
    // Write your code here
    
    let arr = [];

    for(let x=0; x < n; x++){
        arr.push([]);
    }

    return init_arr(arr,n,queries)

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const q = parseInt(firstMultipleInput[1], 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = dynamicArray(n, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
