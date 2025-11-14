function isAscending(arr: number[]): boolean {
    let currentEl = arr[0];

    for (let index = 1; index < arr.length; index++) {
        if (arr[index] < currentEl) {
            return false;
        }
        currentEl = arr[index];
    }

    return true;
}

const inputArr = [1, 2, 3, 4, 2];

const ansFoinputArr = isAscending(inputArr)

console.log(ansFoinputArr)