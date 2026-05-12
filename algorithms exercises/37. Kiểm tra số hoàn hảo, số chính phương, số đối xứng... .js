//Kiểm tra số hoàn hảo
//Số hoàn hảo là một số nguyên dương mà tổng các ước số dương của nó (ngoại trừ chính nó) bằng chính nó.
//Ví dụ, 6 là một số hoàn hảo vì các ước số dương của nó là 1, 2 và 3, và tổng của chúng là 6 (1 + 2 + 3 = 6).
//Tương tự, 28 cũng là một số hoàn hảo vì các ước số dương của nó là 1, 2, 4, 7 và 14, và tổng của chúng là 28 (1 + 2 + 4 + 7 + 14 = 28).
function isPerfectNumber(num) {
  if (num <= 1) {
    return false; // Số hoàn hảo phải là số nguyên dương lớn hơn 1
  }

  let sum = 0;

  // Tính tổng các ước số dương của num (ngoại trừ chính num)
  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return sum === num; // Kiểm tra nếu tổng bằng num thì đó là số hoàn hảo
}
// complexity của cách này là O(n) vì chúng ta phải duyệt qua tất cả các số từ 1 đến num/2 để tìm ra các ước số dương của num và tính tổng của chúng.

// Kiểm tra số chính phương
// Số chính phương là một số nguyên dương mà căn bậc hai của nó là một số nguyên.
// Ví dụ, 16 là một số chính phương vì căn bậc hai của nó là 4, và 4 là một số nguyên.
// Tương tự, 25 cũng là một số chính phương vì căn bậc hai của nó là 5, và 5 là một số nguyên.
function isPerfectSquare(num) {
  if (num < 0) {
    return false; // Số chính phương phải là số nguyên dương
  }

  const sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt); // Kiểm tra nếu căn bậc hai là một số nguyên
}
//complexity của cách này là O(1) vì chúng ta chỉ thực hiện một số phép toán cơ bản để kiểm tra nếu căn bậc hai của num là một số nguyên hay không.

// Kiểm tra số đối xứng
// Số đối xứng là một số nguyên mà khi đọc từ trái sang phải hoặc từ phải sang trái đều giống nhau.
// Ví dụ, 121 là một số đối xứng vì khi đọc từ trái sang phải hoặc từ phải sang trái đều giống nhau.
// Tương tự, 12321 cũng là một số đối xứng vì khi đọc từ trái sang phải hoặc từ phải sang trái đều giống nhau.
function isPalindromeNumber(num) {
  const strNum = num.toString();
  const reversedStrNum = strNum.split("").reverse().join("");
  return strNum === reversedStrNum; // Kiểm tra nếu chuỗi ban đầu bằng chuỗi đảo ngược thì đó là số đối xứng
}
//complexity của cách này là O(n) vì chúng ta phải chuyển số thành chuỗi, sau đó đảo ngược chuỗi và so sánh với chuỗi ban đầu để kiểm tra nếu đó là số đối xứng hay không.

// Kiểm tra số nguyên dương
// Số nguyên dương là một số nguyên lớn hơn 0.
// Ví dụ, 1, 2, 3, ... đều là số nguyên dương.
function isPositiveInteger(num) {
  return Number.isInteger(num) && num > 0; // Kiểm tra nếu num là một số nguyên và lớn hơn 0 thì đó là số nguyên dương
}
// complexity của cách này là O(1) vì chúng ta chỉ thực hiện một số phép toán cơ bản để kiểm tra nếu num là một số nguyên và lớn hơn 0 hay không.

//kiểm tra số nguyên tố
// Số nguyên tố là một số nguyên dương lớn hơn 1 mà chỉ có hai ước số dương là 1 và chính nó.
// Ví dụ, 2, 3, 5, 7, 11, ... đều là số nguyên tố.
function isPrimeNumber(num) {
  if (num <= 1) {
    return false; // Số nguyên tố phải là số nguyên dương lớn hơn 1
  }

  //Math.sqrt(num) sẽ trả về căn bậc hai của num.
  // Chúng ta chỉ cần kiểm tra các số từ 2 đến căn bậc hai của num để xác định nếu num là số nguyên tố hay không vì nếu num có một ước số nào đó lớn hơn căn bậc hai của nó thì chắc chắn sẽ có một ước số nào đó nhỏ hơn căn bậc hai của nó.
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Nếu num chia hết cho bất kỳ số nào từ 2 đến căn bậc hai của num thì num không phải là số nguyên tố
    }
  }

  return true; // Nếu num không chia hết cho bất kỳ số nào từ 2 đến căn bậc hai của num thì num là số nguyên tố
}
// complexity của cách này là O(sqrt(n)) vì chúng ta chỉ phải kiểm tra các số từ 2 đến căn bậc hai của num để xác định nếu num là số nguyên tố hay không.
