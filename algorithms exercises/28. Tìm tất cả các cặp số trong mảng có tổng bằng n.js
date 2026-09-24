//Cách 1: Brute force
//Tư duy đơn giản nhất: với mỗi số, thử cộng với tất cả số phía sau.
function findPairs(nums, target) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push([nums[i], nums[j]]);
      }
    }
  }

  return result;
}

console.log(findPairs([2, 7, 11, 15, 3, 6], 9));
// [[2, 7], [3, 6]]
// complex time ở đây là O(n^2) vì nó duyệt mảng 2 lần

//Cách 2: Dùng set để tối ưu xuống còn O(n)
function findPairs(nums, target) {
  const seen = new Set();
  const result = [];

  for (const num of nums) {
    const complement = target - num;
    if (seen.has(complement)) {
      result.push([complement, num]);
    }

    seen.add(num);
  }

  return result;
}

console.log(findPairs([2, 7, 11, 15, 3, 6], 9));
// [[2, 7], [3, 6]]

// target = 9
// nums = [2, 7, 11, 15, 3, 6]

// num = 2
// complement = 9 - 2 = 7
// seen có 7? ❌
// seen = {2}

// num = 7
// complement = 9 - 7 = 2
// seen có 2? ✅
// → [2, 7]

// seen = {2, 7}

// ...

// num = 6
// complement = 9 - 6 = 3
// seen có 3? ✅
// → [3, 6]
