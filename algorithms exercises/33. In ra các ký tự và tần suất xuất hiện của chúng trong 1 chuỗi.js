//In ra các ký tự và tần suất xuất hiện của chúng trong 1 chuỗi
//Bài này dùng pattern frequency counting pattern
//Trường hợp 1: nếu chuỗi null => return null
//Trường hợp 2: nếu chuỗi rỗng => return {}
//Trường hợp 3: nếu chuỗi có nhiều ký tự => chúng ta sẽ dùng một object để lưu trữ tần suất của các ký tự trong chuỗi và sau đó trả về object đó

function countCharacterFrequency(str) {
  if (str === null) {
    return null;
  }

  if (str.length === 0) {
    return {};
  }

  const frequencyObj = {};

  for (let char of str) {
    frequencyObj[char] = (frequencyObj[char] || 0) + 1;
  }

  return frequencyObj;
}

console.log(countCharacterFrequency("hello world world hello")); // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 2, w: 2, r: 2, d: 2 }

//Cách 2 dùng map
function countCharacters(str) {
  const map = new Map();

  for (const char of str) {
    if (char === " ") continue;

    map.set(char, (map.get(char) || 0) + 1);
  }

  return map;
}

console.log(countCharacters("hello world"));

//Complexity của cả 2 cách đều là O(n) vì chúng ta phải duyệt qua chuỗi một lần để đếm tần suất của các ký tự trong chuỗi.
