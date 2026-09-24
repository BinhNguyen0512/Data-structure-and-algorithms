// đặt 1 biến max là số đầu tiên của mảng
// Duyệt mảng và so sánh, nếu số nào lớn hơn max thì gắn số đó là max
// => complex time: O(n) vì duyệt qua một lần
// => space: O(1) vì chỉ tốn 1 biến max
function findMax(nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < max) {
      max = nums[i];
    }
  }

  return max;
}

console.log(findMax([3, 7, 2, 9, 4])); // 9
console.log(findMax([-5, -2, -10, -1])); // -1

//cách 2: dùng Sort và lấy số lớn nhất => độ phức tạp cũng là O(n)
//Cách 3: dùng Math.max nhưng cái này chỉ nhận những số riêng lẻ nên cần spread
console.log(Math.max(...[3, 7, 2, 9, 4]));
Math.max(3, 7, 2, 9, 4); // 9
