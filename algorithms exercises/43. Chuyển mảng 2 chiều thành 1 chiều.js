// Kakak tiếp 😆 Bài này là flatten array. Với mảng 2 chiều → 1 chiều thì khá đơn giản.
// Giả sử:
// const nums = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// // → [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Cách 1: Hai vòng lặp
function flattenArray(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      result.push(nums[i][j]);
    }
  }

  return result;
}

console.log(
  flattenArray([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Tư duy:
// [
//   [1, 2, 3],  → push 1, 2, 3
//   [4, 5, 6],  → push 4, 5, 6
//   [7, 8, 9],  → push 7, 8, 9
// ]

// ↓

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Có 2 vòng for nhưng không phải mặc định là O(n²) nhé.
// Nếu có:
// r = số mảng con
// c = trung bình số phần tử mỗi mảng
// thì:
// Time: O(r × c)
// Hoặc cách tổng quát và chính xác hơn, gọi N là tổng số phần tử:
// Time:  O(N)
// Space: O(N)
// Vì mỗi phần tử chỉ được lấy ra và push đúng một lần.

//Cách 2: JS có sẵn flat()
const nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const result = nums.flat();

console.log(result);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

//
//
//

//Nếu không biết mảng nested sâu bao nhiêu level
// À kakak 😆 Ý mình là bài vừa rồi **biết chắc chỉ có 2 chiều**, nên 2 vòng `for` là đủ.

// Ví dụ:

// ```js
// [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]
// ```

// Cấu trúc cố định:

// ```text
// Array
//  ├── Array
//  │    ├── 1
//  │    └── 2
//  ├── Array
//  │    ├── 3
//  │    └── 4
//  └── Array
//       ├── 5
//       └── 6
// ```

// Nhưng interviewer có thể đổi đề thành:

// > Mảng có thể nested **bao nhiêu tầng cũng được**, hãy chuyển nó thành mảng 1 chiều.

// Ví dụ:

// ```js
// const nums = [
//   1,
//   [2, 3],
//   [4, [5, 6]],
//   [7, [8, [9, 10]]]
// ];
// ```

// Muốn kết quả:

// ```js
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// ```

// Lúc này mình **không biết trước có bao nhiêu tầng**:

// ```text
// 1
// [2, 3]                  → 1 tầng
// [4, [5, 6]]             → 2 tầng
// [7, [8, [9, 10]]]       → 3 tầng
//              ↑
//          có thể còn nữa...
// ```

// Nên không thể viết kiểu:

// ```js
// for (...) {
//   for (...) {
//     for (...) {
//       // ???
//     }
//   }
// }
// ```

// vì mình đâu biết cần bao nhiêu vòng `for`.

// ### Đây là lúc recursion rất hợp

// ```js
// function flattenArray(arr) {
//   const result = [];

//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       result.push(...flattenArray(item));
//     } else {
//       result.push(item);
//     }
//   }

//   return result;
// }
// ```

// Nhìn dry run với:

// ```js
// [1, [2, 3], [4, [5, 6]]]
// ```

// Ban đầu:

// ```text
// item = 1

// 1 không phải array
// → push(1)

// result = [1]
// ```

// Tiếp:

// ```text
// item = [2, 3]

// là Array
// → flattenArray([2, 3])
// ```

// Hàm **tự gọi lại chính nó**:

// ```text
// flattenArray([2, 3])
//         ↓
//       item 2 → push
//       item 3 → push
//         ↓
//       [2, 3]
// ```

// Sau đó đưa kết quả vào array ngoài:

// ```text
// result = [1, 2, 3]
// ```

// Tiếp:

// ```text
// item = [4, [5, 6]]

// → flattenArray([4, [5, 6]])
// ```

// Bên trong lại gặp `[5, 6]`:

// ```text
// flattenArray([4, [5, 6]])
//               ↓
//               4
//               ↓
//         flattenArray([5, 6])
//               ↓
//             [5, 6]

// → [4, 5, 6]
// ```

// Cuối cùng:

// ```text
// [1] + [2, 3] + [4, 5, 6]

// → [1, 2, 3, 4, 5, 6]
// ```

// Đây chính là cái hay của **recursion**: mình không cần biết nested sâu bao nhiêu.

// Mental model cực dễ nhớ:

// ```text
// Duyệt từng item
//       ↓
// item là array?
//    /       \
//  NO        YES
//  ↓          ↓
// push      gọi lại
// item      chính hàm
//             ↓
//         tiếp tục đào
// ```

// Cho đến khi gặp **giá trị không còn là array** thì mới `push`.

// ### Complexity

// Nếu tổng cộng có `N` phần tử thì về cơ bản:

// ```text
// Time: O(N)
// ```

// vì cuối cùng mình vẫn phải đi qua tất cả phần tử.

// Recursion còn sử dụng **call stack**, nên nếu nested sâu `D` tầng:

// ```text
// Call stack: O(D)
// ```

// Ví dụ:

// ```js
// [1, [2, [3, [4]]]]
// ```

// thì có thể tưởng tượng:

// ```text
// flatten(level 1)
//    ↓
// flatten(level 2)
//    ↓
// flatten(level 3)
//    ↓
// flatten(level 4)
//    ↓
// xong
//    ↑
// return
//    ↑
// return
//    ↑
// return
// ```

// Đây cũng là một ví dụ **rất đẹp để hiểu recursion**. Bài factorial lúc nãy recursion chỉ gọi `n - 1`; còn bài này recursion được dùng để **đi sâu vào một cấu trúc nested**. Sau này học **Tree Traversal** bạn sẽ gặp đúng mental model này liên tục. 😆
