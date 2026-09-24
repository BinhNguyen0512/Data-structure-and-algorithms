//Có 2 cách
//Cách 1 thì duyệt 2 vòng for => complex time: O(n^2)
function firstDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] === nums[i]) {
        return nums[i];
      }
    }
  }

  return -1;
}

console.log(firstDuplicate([2, 5, 1, 3, 5, 2]));

//cách 2 thì duyệt 1 vòng for và dùng Set (thêm memory) => complex time: O(n) và space: O(n)
function firstDuplicate(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return num;
    }

    seen.add(num);
  }

  return -1;
}

console.log(firstDuplicate([2, 5, 1, 3, 5, 2]));
// 5

// nums = [2, 5, 1, 3, 5, 2]

// seen = {}

// 2:
// seen.has(2) → false
// seen = {2}

// 5:
// seen.has(5) → false
// seen = {2, 5}

// 1:
// seen.has(1) → false
// seen = {2, 5, 1}

// 3:
// seen.has(3) → false
// seen = {2, 5, 1, 3}

// 5:
// seen.has(5) → TRUE

// → return 5
