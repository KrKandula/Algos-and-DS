//reference: https://www.youtube.com/watch?v=Jdtq5uKz-w4

// input: [10, 12, 5, 8, 2, 20, 1]
// output: [1, 2, 5, 8, 10, 12, 20]
// implementation:
// 1. For each pass and n-1 passed will be made
// 2. Element at ith positions and i+1 th position will be compared and greater one moved to i+1, (bubbles to right) 

// 3. Improved version: Since in each pass the biggest element ends up at the end of the array, for the 
// subsequent pass the final element could be ignored
// 4. if during a pass no swaps have occured it means the array is sorted and the loop could be exited.

//Time complexity: O(n^2)

let arr = [10, 12, 5, 8, 2, 20, 1]
console.log('before sort ...')
console.log (arr)

//bubble sort
function bubbleSort(arr) {
    let swapFlag = false;
    for(let i=0; i<arr.length;i++) {
        for(let j=0;j<arr.length-1-i;j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
                swapFlag=true;
            }
        }
        if (swapFlag == false) { //arr went through a pass without swap, meaning already sorted
            break;
        }
    }
    return arr;
}

console.log('after sort ...')
console.log(bubbleSort(arr))