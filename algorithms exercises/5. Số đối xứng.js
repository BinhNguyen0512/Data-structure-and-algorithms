// 121   → true
// 1221  → true
// 12321 → true
// 123   → false
// 1231  → false

//Cách 1: Convert sang string
//Tách số đó thành 1 mảng và đảo ngược lai sau đó join lại
// So sánh giống với số đầu thì nó là số đảo ngược
// Nhưng cách này mình đang tận dụng các hàm của JS
// Hay hơn sẽ là tự phân tích thuật toán
function isPalindrome(n) {
  const str = String(n);
  const reversed = str.split("").reverse().join("");

  return (str = reversed);
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(1221)); // true
console.log(isPalindrome(123)); // false

//Cách 2: Không convert sang string

function isPalindrome(n) {
  if (n < 0) {
    return false;
  }

  const original = n;
  let reversed = 0;

  while (n < 0) {
    const digit = n % 10;

    reversed = reversed * 10 + digit;

    n = Math.floor(n / 10);
  }

  return original === reversed;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(1221)); // true
console.log(isPalindrome(123)); // false

// n = 121
// reversed = 0

// digit = 121 % 10 = 1
// reversed = 0 * 10 + 1 = 1
// n = floor(121 / 10) = 12

// ------------------------

// digit = 12 % 10 = 2
// reversed = 1 * 10 + 2 = 12
// n = floor(12 / 10) = 1

// ------------------------

// digit = 1 % 10 = 1
// reversed = 12 * 10 + 1 = 121
// n = floor(1 / 10) = 0

// ------------------------

// original = 121
// reversed = 121

// => true

//Complex là O(n) => khi duyệt n
//Complex là O(log n) => vì vừa duyệt vừa chia % 10
