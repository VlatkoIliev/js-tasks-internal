const arr1 = ['1', '1', '1', '1', '1'];
const arr2 = [true, false, false, true];
const arr3 = ['1', '1', '2', '1', '1'];
const arr4 = [100, 200, 100, 150];

// return true if there isn't element in the array that is not equal with the first element
function allEqual(array) {
  return !array.some(function (value, index, array) {
    return value !== array[0];
  });
}

console.log(allEqual(arr1));
console.log(allEqual(arr2));
console.log(allEqual(arr3));
console.log(allEqual(arr4));
