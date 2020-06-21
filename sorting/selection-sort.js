// input: [10, 12, 5, 8, 2, 20, 1]
// output: [1, 2, 5, 8, 10, 12, 20]
// implementation using selection sort: 
// 1. Start at the beginning of the array, search for the least element in the array
// 2. swap the found least element with the start of the array
// 3. move the start of the array to the second element and find the least element and swap with the start of array,
// 4. continue doing this until end of array
// Time Complexity: O(n^2)

let arr = [10, 12, 5, 8, 2, 20, 1]

console.log('Before sort...');
console.log(arr);

//insertion sort
for (i=0;i<arr.length-1;i++) {
    let minIndex = i;
    for (j=i+1; j<arr.length; j++) {
        if (arr[j] < arr[minIndex]){
            minIndex = j;
        }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}

console.log('After sort...');
console.log(arr);