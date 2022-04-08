// Reference:
// https://www.youtube.com/watch?v=COk73cpQbFQ

console.log("=== Welcome to Quick Sort ===");

let arr = [7,6,1,8,0,3,5]

console.log('input arr: ')
console.log(arr)

console.log('sorted arr:')
quicksort(arr, 0, arr.length-1)
console.log(arr);

function quicksort(arr, start, end) {
    if (start < end) {
        pIndex = partition(arr, start, end)
        quicksort(arr, start, pIndex-1)
        quicksort(arr, pIndex+1, end)
    }
}

function partition(arr, start, end) {
    pivot = arr[end]
    pIndex = start
    for (i=start; i<end; i++) {
        if (arr[i] <= pivot) {
            //swap a[i] with value at pIndex
            temp = arr[i]
            arr[i] = arr[pIndex]
            arr[pIndex] = temp
            //increment pIndex
            pIndex++
        } 
    }
    //swap pIndex value with pivot value
    temp = arr[end]
    arr[end] = arr[pIndex]
    arr[pIndex] = temp

    return pIndex
}

