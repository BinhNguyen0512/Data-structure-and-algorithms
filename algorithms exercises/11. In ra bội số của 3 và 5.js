//Nhắc lại về bội và ước
// Giả sử:
// 12 ÷ 3 = 4
// hay:
// 12 % 3 === 0
// Thì:
// 12 là BỘI của 3
// 3 là ƯỚC của 12

// Ví dụ các bội của 3:
// 3, 6, 9, 12, 15, 18, 21...
// vì:
// 3 × 1 = 3
// 3 × 2 = 6
// 3 × 3 = 9
// 3 × 4 = 12
// ...
// Còn các ước của 12:
// 1, 2, 3, 4, 6, 12
// vì 12 chia hết cho tất cả các số đó.

// Liên hệ với code
// Nếu:
// a % b === 0
// thì nhớ:
// a là BỘI của b
// b là ƯỚC của a
// Ví dụ:
// 15 % 3 === 0
// → 15 là bội của 3
// → 3 là ước của 15

// Mẹo nhớ
// BỘI = số to ra do NHÂN
// 3 → 6 → 9 → 12 → 15...
// ƯỚC = số có thể CHIA số kia
// Ước của 12
// → những số nào chia 12 không dư?
// → 1, 2, 3, 4, 6, 12
// Chỉ cần thuộc câu này là đủ:
// a % b === 0 → a là BỘI của b, b là ƯỚC của a.

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }

    if (i % 3 === 0) {
      console.log("Fizz");
    }

    if (i % 5 === 0) {
      console.log("Buzz");
    }

    console.log(i);
  }
}

fizzBuzz(100);
