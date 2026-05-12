// Tìm phần tử có lần xuất hiện nhiều nhất trong mảng

//Phân tích bài toán với các trường hợp:
// Trường hợp 1: nếu mảng null => return null
// Trường hợp 2: nếu mảng chỉ có 1 phần tử => return phần tử đó vì nó là phần tử duy nhất trong mảng nên nó cũng là phần tử có số lần xuất hiện nhiều nhất trong mảng.
// Trường hợp 3: nếu mảng có nhiều phần tử
//         Sẽ có 2 trường hợp xảy ra:
//         // Trường hợp 3.1: Nếu chỉ có duy nhất 1 phần tử có lần xuất hiện nhiều nhất trong mảng => return phần tử đó
//         // Trường hợp 3.2: Nếu có nhiều phần tử có lần xuất hiện nhiều nhất trong mảng => return một mảng chứa tất cả các phần tử đó

//=> Bài toán này để scale nhất thì chúng ta cần giải quyết ở trường hợp 3.2 vì nếu chỉ có duy nhất 1 phần tử có lần xuất hiện nhiều nhất trong mảng thì chúng ta chỉ cần return phần tử đó thôi
// còn nếu có nhiều phần tử có lần xuất hiện nhiều nhất trong mảng thì chúng ta cần phải return một mảng chứa tất cả các phần tử đó.

//Giải quyết bài toán theo cách 1 dùng Map
function findMostFrequentElements(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  const frequencyMap = new Map();
  let maxFrequency = 0;

  for (let num of arr) {
    const frequency = (frequencyMap.get(num) || 0) + 1;
    frequencyMap.set(num, frequency);
    maxFrequency = Math.max(maxFrequency, frequency);
  }

  const mostFrequentElements = [];

  for (let [num, frequency] of frequencyMap.entries()) {
    if (frequency === maxFrequency) {
      mostFrequentElements.push(num);
    }
  }

  return mostFrequentElements.length === 1
    ? mostFrequentElements[0]
    : mostFrequentElements;
}
// Cách này có complexity là O(n) vì chúng ta chỉ duyệt qua mảng

//Giải quyết bài toán theo cách 2 không dùng Map mà dùng một object để lưu trữ tần suất của các phần tử trong mảng
function findMostFrequentElementsC2(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  const frequencyObj = {};
  let maxFrequency = 0;

  for (let num of arr) {
    frequencyObj[num] = (frequencyObj[num] || 0) + 1;
    maxFrequency = Math.max(maxFrequency, frequencyObj[num]);
  }

  const mostFrequentElements = [];

  for (let num in frequencyObj) {
    if (frequencyObj[num] === maxFrequency) {
      mostFrequentElements.push(Number(num));
    }
  }

  return mostFrequentElements.length === 1
    ? mostFrequentElements[0]
    : mostFrequentElements;
}
// Cách này cũng có complexity là O(n) vì chúng ta chỉ duyệt qua mảng một lần để xây dựng đối tượng tần suất và sau đó duyệt qua
//đối tượng đó để tìm các phần tử có tần suất bằng maxFrequency.
