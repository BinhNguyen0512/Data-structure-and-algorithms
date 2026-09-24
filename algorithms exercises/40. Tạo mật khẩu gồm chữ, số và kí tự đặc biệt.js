// Requirement là bắt buộc ít nhất 1 chữ + 1 số + 1 ký tự đặc biệt
// Đoạn shuffle ở đây chính là Fisher–Yates Shuffle, cũng là một thuật toán khá hay để biết.
// Về complexity, với password dài n:
// Generate: O(n)
// Shuffle:  O(n)

// Total:    O(n)
// Space:    O(n)

function getRandomChar(chars) {
  const index = Math.floor(Math.random() * chars.length);
  return chars[index];
}

function shuffle(str) {
  const chars = str.split("");

  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [chars[i], chars[j]] = [chars[j], chars[i]];
  }

  return chars.join("");
}

function generatePassword(length) {
  if (length < 3) {
    throw new Error("Password must be at least 3 characters");
  }

  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*";

  const allChars = letters + numbers + specialChars;

  let password = "";

  // Đảm bảo mỗi loại có ít nhất 1
  password += getRandomChar(letters);
  password += getRandomChar(numbers);
  password += getRandomChar(specialChars);

  // Random những ký tự còn lại
  for (let i = 3; i < length; i++) {
    password += getRandomChar(allChars);
  }

  // Trộn lại để 3 ký tự bắt buộc không luôn nằm đầu
  return shuffle(password);
}
