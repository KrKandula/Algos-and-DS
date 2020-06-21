// reference: https://www.youtube.com/watch?v=i-SKeOcBwko
// insertion sort

// note: insertion sort is better than selection sort and bubble sort, even though the worst and avg time 
// complexities is is O(n^2)

// Implementation: Start at index 1, index 0 is sorted list, every pass or increment of i, increases the sorted
// list behind it by one. At i, value is taken into a varibale and hole is created. The hole is moved left
// untill left until the hole>0 and value of hole-1 is greater the initial value.

// Time Complexity: O(n^2)

// input: [10, 12, 5, 8, 2, 20, 1]
// output: [1, 2, 5, 8, 10, 12, 20]

let arr = [10, 12, 5, 8, 2, 20, 1];
console.log('Before sorting...');
console.log(arr);

function insertionSort(arr) {
    for(i=1; i<arr.length;i++) {
        let value = arr[i];
        let hole = i;
        while(hole>0 && arr[hole-1]>value) {
            arr[hole] = arr[hole-1]
            hole = hole - 1
        }
        arr[hole] = value;
    }
    return arr;
}

console.log('After sorting...');
console.log(insertionSort(arr));