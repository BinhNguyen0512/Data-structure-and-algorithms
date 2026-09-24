function sumEventAtOddIndex(nums) {
  let sum = 0;

  for (let i = 1; i < nums.length; i += 2) {
    if (nums[i] % 2 === 0) {
      sum += nums[i];
    }
  }

  return sum;
}
