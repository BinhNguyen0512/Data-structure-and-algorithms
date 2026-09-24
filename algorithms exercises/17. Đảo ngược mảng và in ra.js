//Cách 1: duyệt và in theo thứ tự ngược lại mà không cần thay đổi mảng
function printReverse(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    console.log(nums[i]);
  }
}

printReverse([1, 2, 3, 4, 5]);

//Cách 2: Thực sự đảo ngược mảng, cách này đáng học hơn vì xuất hiện Two pointer
function reverseArray(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;

    left++;
    right++;
  }

  return nums;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
// [5, 4, 3, 2, 1]

// [1, 2, 3, 4, 5]
//  ↑           ↑
// left       right

// swap 1 ↔ 5

// [5, 2, 3, 4, 1]
//     ↑     ↑

// swap 2 ↔ 4

// [5, 4, 3, 2, 1]
//        ↑
//       done
//=> Dùng 2 con trỏ 2 bên để swap, độ phức tạp thuật toán là O(n/2)
//Nhưng bỏ constant nên vẫn là O(n) => nhưng tư duy hay hơn

//        Two Pointers

// left → [1, 2, 3, 4, 5] ← right

//         swap
//           ↓

//        [5, 2, 3, 4, 1]

//            → ←

//         swap
//           ↓

//        [5, 4, 3, 2, 1]
