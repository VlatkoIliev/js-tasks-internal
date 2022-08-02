function rotate(arr, n) {
  let length = arr.length;
  let first = arr.slice((length - n) % length, length);
  let second = arr.slice(0, (length - n) % length);
  let rotated = [...first, ...second];
  return rotated;
}

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3, 4, 5];

console.log(rotate(arr1, 2));
console.log(rotate(arr1, 1));
console.log(rotate(arr1, -2));
console.log(rotate(arr1, 0));

console.log('second array');
console.log(rotate(arr2, -3));
console.log(rotate(arr2, 1));
