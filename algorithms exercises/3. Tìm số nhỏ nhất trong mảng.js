// đặt 1 biến min là số đầu tiên của mảng
// Duyệt mảng và so sánh, nếu số nào nhỏ hơn min thì gắn số đó là min
// => complex time: O(n) vì duyệt qua một lần
// => space: O(1) vì chỉ tốn 1 biến min
function findMin(nums) {
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }

  return min;
}

console.log(findMin([3, 7, 2, 9, 4])); // 9
console.log(findMin([-5, -2, -10, -1])); // -1
