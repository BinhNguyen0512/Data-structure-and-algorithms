// Ví dụ:
// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];

// // → [1, 2, 5, 6]
// Vì:
// 1 → chỉ arr1 ✅
// 2 → chỉ arr1 ✅
// 3 → cả hai ❌
// 4 → cả hai ❌
// 5 → chỉ arr2 ✅
// 6 → chỉ arr2 ✅
// Trong toán học, đây gần với symmetric difference.

//Cách 1: complex là O(n^2)
function difference(arr1, arr2) {
  const result = [];

  for (const num of arr1) {
    if (!arr2.includes(num)) {
      result.push(num);
    }
  }

  for (const num of arr2) {
    if (!arr1.includes(num)) {
      result.push;
    }
  }

  return result;
}

console.log(difference([1, 2, 3, 4], [3, 4, 5, 6]));

// [1, 2, 5, 6]

//Cách 2: dùng Set => complex O(n)
function difference2(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const result = [];

  for (const num of set1) {
    if (!set2.has(num)) {
      result.push(num);
    }
  }

  for (const num of set2) {
    if (!set1.has(num)) {
      result.push(num);
    }
  }

  return result;
}

console.log(difference([1, 2, 3, 4], [3, 4, 5, 6]));
// [1, 2, 5, 6]

// Đây là pattern nên nhớ
// Nếu bạn thấy:
// for (...) {
//   otherArray.includes(value);
// }
// hãy bắt đầu nghi ngờ:
// Loop O(n)
//    +
// includes O(m)

// → O(n × m)
// Và tự hỏi:
// "Mình có cần lookup thằng này tồn tại hay không?"

//               ↓ YES

//              Set
//               ↓
//           has() ~ O(1)
// Nó giống hệt case trước của mình:
// "Đã gặp phần tử này chưa?"
//         ↓
//        Set

// "Phần tử này có tồn tại ở collection kia không?"
//         ↓
//        Set
// Lưu ý: cách dùng Set trên hiểu "phần tử" theo giá trị duy nhất. Ví dụ [1,1,2] và [2,3] sẽ cho [1,3], không phải [1,1,3]. Nếu đề muốn tính cả số lần xuất hiện, lúc đó bài toán đổi sang frequency và Map sẽ phù hợp hơn.
