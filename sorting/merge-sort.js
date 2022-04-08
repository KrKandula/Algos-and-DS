// reference: https://www.youtube.com/watch?v=TzeBrDU-JaY

// input: [10, 12, 5, 8, 2, 20, 1]
// output: [1, 2, 5, 8, 10, 12, 20]

//Time complexity: O(nlog(n))

let arr = [10, 12, 5, 8, 2, 20, 1]

console.log('before merge sort...')
console.log(arr);

function merge(arr, la, ra) {
    let i = 0,  //arr
    j = 0, //left
    k = 0; //right
    while (j<la.length && k<ra.length) {
        if(la[j] <= ra[k]) {
            arr[i] = la[j]
            i++; j++
        } else {
            arr[i] = ra[k]
            i++; k++
        }
    }
    while(j<la.length) {
        arr[i] = la[j]
        i++; j++
    }
    while(k<ra.length) {
        arr[i] = ra[k]
        i++; k++
    }
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return
    }
    let mid = arr.length/2;
    let la = arr.slice(0, mid);
    let ra = arr.slice(mid, arr.length);
    mergeSort(la)
    mergeSort(ra)
    merge(arr, la, ra)
    return arr
}   

console.log('after merge sort...')
console.log(mergeSort(arr));