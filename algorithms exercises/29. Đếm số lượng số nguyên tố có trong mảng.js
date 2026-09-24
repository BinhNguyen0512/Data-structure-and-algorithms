//Số nguyên tố là số chỉ chia hết cho 1 và chính nó
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function countPrimes(nums) {
  let count = 0;

  for (const num of nums) {
    if (isPrime(num)) {
      count++;
    }
  }

  return count;
}

console.log(countPrimes([2, 3, 4, 5, 6, 7, 8, 11]));
// 5

// Tại sao i * i <= n?
// Nó tương đương:
// i <= Math.sqrt(n)
// Ta chỉ cần kiểm tra ước tới √n.
// Ví dụ 36:
// 1 × 36
// 2 × 18
// 3 × 12
// 4 × 9
// 6 × 6
// Qua √36 = 6 thì các cặp chỉ bắt đầu lặp ngược lại.
// Nên:
// for (let i = 2; i * i <= n; i++)
// tốt hơn:
// for (let i = 2; i < n; i++)

//Em duyệt N phần tử, với mỗi phần tử em kiểm tra số nguyên tố
//trong O(√M), nên tổng time complexity là O(N√M), auxiliary space O(1)
