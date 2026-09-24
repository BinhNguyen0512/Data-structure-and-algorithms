//Ước chung lớn nhất — GCD (Greatest Common Divisor).
//Cách 1: duyệt tìm ước
function gcd(a, b) {
  let result = 1;

  const min = Math.min(a, b);

  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      result = i;
    }
  }

  return result;
}

console.log(gcd(12, 18)); // 6
// Logic chính:
// a % i === 0 && b % i === 0
// nghĩa là i vừa là ước của a, vừa là ước của b → ước chung.
// Cách này có:
// Time:  O(min(a, b))
// Space: O(1)

//bài này có một thuật toán nổi tiếng và tốt hơn rất nhiều: Euclidean Algorithm.
function gcd2(a, b) {
  while (b !== 0) {
    const remainder = a % b;

    a = b;
    b = remainder;
  }

  return a;
}

// Dry run rất đáng hiểu:
// a = 12
// b = 18

// 12 % 18 = 12

// a = 18
// b = 12
// ----------------

// 18 % 12 = 6

// a = 12
// b = 6
// ----------------

// 12 % 6 = 0

// a = 6
// b = 0

// STOP

// → GCD = 6
// Ý tưởng toán học đằng sau là:
// GCD(a, b) = GCD(b, a % b)
// Nên cứ biến:
// (a, b)

// ↓

// (b, a % b)
// cho tới khi:
// b === 0
// thì a chính là GCD.
// Euclidean Algorithm có:
// Time:  O(log(min(a, b)))
// Space: O(1)
// Đây là cách mình khuyên nhớ khi phỏng vấn:
// while (b !== 0) {
//   [a, b] = [b, a % b];
// }

// return a;
// Và từ bài này suy ra luôn BCNN / LCM rất đẹp:
// LCM(a, b) = |a × b| / GCD(a, b)
// Nên nếu bài tiếp theo của bạn là bội chung nhỏ nhất, mình gần như có sẵn lời giải rồi 😆.
