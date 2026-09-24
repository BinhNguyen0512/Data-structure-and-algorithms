//Chia hết thì số đó chính là ước
function printDivisors(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}

printDivisors(12);

// Tư duy rất đơn giản. Ta thử từng số từ 1 → n:
// 12 % 1 === 0  → 1 là ước
// 12 % 2 === 0  → 2 là ước
// 12 % 3 === 0  → 3 là ước
// 12 % 4 === 0  → 4 là ước
// 12 % 5 !== 0  → bỏ
// 12 % 6 === 0  → 6 là ước
// ...
// 12 % 12 === 0 → 12 là ước
// Nhớ lại công thức vừa rồi:
// a % b === 0
// → b là ước của a
