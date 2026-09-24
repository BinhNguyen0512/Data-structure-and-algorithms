//Kiểm tra có phải là số nguyên tố hay không
function checkPrime(n) {
  if (n % 2 === 0) return true;

  return false;
}

console.log(checkPrime(14));
console.log(checkPrime(7));
console.log(checkPrime(2));
