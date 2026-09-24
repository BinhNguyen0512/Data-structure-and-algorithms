// Một số Armstrong là số mà:
// Tổng mỗi chữ số lũy thừa với số lượng chữ số = chính số ban đầu.

// Ví dụ 153 có 3 chữ số:
// 153

// 1³ + 5³ + 3³
// = 1 + 125 + 27
// = 153

// → Armstrong
// Một ví dụ khác:
// 9474 có 4 chữ số

// 9⁴ + 4⁴ + 7⁴ + 4⁴
// = 6561 + 256 + 2401 + 256
// = 9474

// → Armstrong

function isArmstrong(n) {
  const digits = String(n);
  const power = digits.length;

  let sum = 0;

  for (const digit of digits) {
    sum += Number(digit) ** power;
  }

  return sum === n;
}

//Cách 2: dùng pattern của số đảo ngược

function isArmstrong2(n) {
  const original = n;
  const power = String(n).length;

  let temp = n;
  let sum = 0;

  while (temp > 0) {
    const digit = temp % 10;

    sum += digit ** power;

    temp = Math.floor(temp / 10);
  }

  return sum === original;
}

// Đoạn quan trọng:
// Number(digit) ** power
// ** là toán tử lũy thừa:
// 2 ** 3 // 8
// 5 ** 3 // 125
// 9 ** 4 // 6561
