function bubbleSort(arr) {
    let a = [...arr];
    let n = a.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
            }
        }
    }
    return a;
}

function selectionSort(arr) {
    let a = [...arr];
    let n = a.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
        }
        [a[i], a[minIndex]] = [a[minIndex], a[i]];
    }
    return a;
}

function insertionSort(arr) {
    let a = [...arr];
    for (let i = 1; i < a.length; i++) {
        let key = a[i];
        let j = i - 1;
        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = key;
    }
    return a;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

function measureTime(fn, arr) {
    const start = performance.now();
    const sorted = fn(arr);
    const end = performance.now();
    return { time: ((end - start) / 1000).toFixed(3), sorted };
}

function task1() {
    const n = 1000;
    const arr = Array.from({ length: n }, () => Math.floor(Math.random() * 10000));

    const bubble = measureTime(bubbleSort, arr);
    const selection = measureTime(selectionSort, arr);
    const insertion = measureTime(insertionSort, arr);
    const merge = measureTime(mergeSort, arr);

    console.log(`Bubble Sort Time: ${bubble.time} sec`);
    console.log(`Selection Sort Time: ${selection.time} sec`);
    console.log(`Insertion Sort Time: ${insertion.time} sec`);
    console.log(`Merge Sort Time: ${merge.time} sec`);

    const correct = JSON.stringify(bubble.sorted) === JSON.stringify(arr.slice().sort((a, b) => a - b)) &&
                    JSON.stringify(selection.sorted) === JSON.stringify(arr.slice().sort((a, b) => a - b)) &&
                    JSON.stringify(insertion.sorted) === JSON.stringify(arr.slice().sort((a, b) => a - b)) &&
                    JSON.stringify(merge.sorted) === JSON.stringify(arr.slice().sort((a, b) => a - b));

    console.log(`All sorts correct? ${correct}`);
}

task1();
