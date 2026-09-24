//Cách 1: complex là O(n^2)
function intersection(arr1, arr2) {
  const result = [];

  for (const num of arr1) {
    if (arr2.includes(num)) {
      result.push(num);
    }
  }

  return result;
}

console.log(intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// [3, 4, 5]
// Nhưng complexity:
// arr1 loop     → O(n)
// arr2.includes → O(m)

// Time → O(n × m)

//cách 2: optimize bằng Set
function intersection2(arr1, arr2) {
  const set2 = new Set(arr2);
  const result = [];

  for (const num of arr1) {
    if (set2.has(num)) {
      result.push(num);
    }
  }

  return result;
}

console.log(intersection2([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// [3, 4, 5]
