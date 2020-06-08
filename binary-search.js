//Binary search algorithm
//Find an element in an sorted array, in logrithmic time complexity

//Input: Sorted Array, element to find
//Output: position of an array where element is found


// array: 5, 10, 15, 20, 25, 30
// inds:  0,  1,  2,  3,  4,  5
// elem: 25

// start = 0,
// end = 5,
// mid = (start+end)/2
function binarySearch(array, elem){
  var start=0,
      end=array.length-1,
      mid;
  while(start<=end) {
    mid=Math.ceil((start+end)/2);
    if(elem==array[mid]) {
      return mid;
    } else if (elem < array[mid]) {
      end = mid - 1;
    } else if (elem > array[mid]) {
      start = mid + 1;
    }
  }
  return -1;
}

var position = binarySearch([5, 10, 15, 20, 25, 30], 30);
console.log(position);
