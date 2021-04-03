const swap = (arr, i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
const bubbleSort = (arr, sortFn) => {
    const newArr = Array.from(arr);
    for (let i = newArr.length - 1; i >=0; i--) {
        for (let j = 0; j < i; j++) {
            if (sortFn(newArr[j], newArr[j+1]) > 0) {
                swap(newArr, j, j+1);
            }
        }
    }
    return newArr;
}

console.log(bubbleSort([4,2,3,1], (a, b) => b-a));