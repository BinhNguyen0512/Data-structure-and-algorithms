//n! = n × (n - 1) × (n - 2) × ... × 1
// 5! = 5 × 4 × 3 × 2 × 1 = 120
// 3! = 3 × 2 × 1 = 6
// 1! = 1
// 0! = 1

//Cách 1: dùng vòng lặp
//Cách này là tốt nhất vì O(n), và space là O(1)
//Khai báo 1 biến = 1
//Duyệt vòng lặp đến nhỏ hơn n và mỗi lần duyệt lấy kết qủa * với i
//Vòng lặp chạy từ 2 -> <= n
function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
console.log(factorial(0)); // 1

// result = 1

// i = 2 → result = 1 × 2 = 2
// i = 3 → result = 2 × 3 = 6
// i = 4 → result = 6 × 4 = 24
// i = 5 → result = 24 × 5 = 120

// => 120

//cách 2: Recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}
//=>Recursion vẫn O(n) time, nhưng O(n) space vì call stack.
