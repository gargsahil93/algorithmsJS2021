/**
 * Find the sub array with maximum product of sum and minimum element in sub array
 * Ex. [3, 1, 4, 5, 6, 2]
 * [4, 5, 6] is the sub array with max product 4 * (4 + 5 + 6) = 60
 */

const leftBoundaries = (arr) => {
    const stack = [];
    const leftBoundary = [];
    arr.forEach((el, index) => {
        while(stack.length && el < arr[stack[stack.length - 1]]) stack.pop();
        if(stack.length === 0) {
            leftBoundary.push(0);
        } else {
            leftBoundary.push(stack[stack.length - 1]+1);
        }
        stack.push(index);
    });
    return leftBoundary;
}

const findMaxProduct = arr => {
    const prefixSum = [0];
    arr.forEach((el, index) => {
        prefixSum[index+1] = prefixSum[index] + el;
    });
    const leftBoundary = leftBoundaries(arr);
    const rightBoundary = leftBoundaries([...arr].reverse()).reverse().map(el => arr.length - el -1);
    let max = 0;
    console.log(prefixSum);
    console.log(leftBoundary);
    console.log(rightBoundary);
    arr.forEach((el, index) => {
        const sum = prefixSum[rightBoundary[index]+1] - prefixSum[leftBoundary[index]];
        const product = el * sum;
        console.log(product);
        if(product > max) max = product;
    });
    console.log(max);
};

findMaxProduct([3, 1, 4, 5, 6, 2]);