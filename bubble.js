// function swap(array, i, j) {
//   let temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }
// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i++) {

//       swap(array,array[i],array[i+1])
//       swap++
//       let firstVal=array[i];
//       let secondVal=array[i+1]
//       array[i]=secondVal;
//       array[i+1]=firstVal


//   }
// }

function bubbleSort(arr) {
  let swapCount = 0
  if (arr.length === 0) {
    return arr
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] && arr[i] > arr[i + 1]) {
      let firstVal = arr[i];
      let secondVal = arr[i + 1]
      arr[i] = secondVal;
      arr[i + 1] = firstVal
      swapCount++
    }
    else if (i === arr.length - 1 && swapCount === 0) {
      return arr
    } else if (i === arr.length - 1 && swapCount > 0) {
      return bubbleSort(arr)
    }
  }
}