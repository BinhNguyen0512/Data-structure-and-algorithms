const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

//Gộp 2 mảng và lọc ra toàn bộ phần tử trùng lặp
//Có 3 trường hợp:
// Trường hợp 1: nếu cả 2 mảng đều null => return null
// Trường hợp 2: nếu một trong 2 mảng null => return mảng còn lại vì nếu một trong 2 mảng null thì mảng còn lại sẽ là kết quả của việc gộp 2 mảng và lọc ra toàn bộ phần tử trùng lặp.
// Trường hợp 3: nếu cả 2 mảng đều có phần tử => chúng ta sẽ gộp 2 mảng lại với nhau và sau đó lọc ra toàn bộ phần tử trùng lặp trong mảng mới được gộp lại.

//Giải quyết bài toán
function mergeAndFilterDuplicates(arr1, arr2) {
  if (!arr1 && !arr2) {
    return null;
  }

  if (!arr1) {
    return arr2;
  }

  if (!arr2) {
    return arr1;
  }

  const mergedArray = [...arr1, ...arr2];
  const uniqueElements = [...new Set(mergedArray)];

  return uniqueElements;
}
// Cách này có complexity là O(n + m) vì chúng ta phải duyệt qua cả 2 mảng để gộp lại và sau đó lọc ra toàn bộ phần tử trùng lặp trong mảng mới được gộp lại.

//Nếu bài toán đổi thành: lấy ra các phần tử trùng lặp trong 2 mảng thì chúng ta sẽ giải quyết bài toán như sau:
function findDuplicates(arr1, arr2) {
  if (!arr1 && !arr2) {
    return null;
  }

  if (!arr1 || !arr2) {
    return [];
  }

  const set1 = new Set(arr1);
  const duplicates = [];

  console.log("set1: ", set1);
  for (let num of arr2) {
    if (set1.has(num)) {
      duplicates.push(num);
    }
  }
  //có 1 trường hợp đó là:
  // [1, 2, 3],
  //[3, 3, 3]  => result sẽ là [3, 3, 3] vì chúng ta sẽ push tất cả các phần tử trùng lặp trong mảng thứ 2 vào mảng kết quả mà không kiểm tra xem phần tử đó đã được push vào mảng kết quả chưa.
  // Nếu chúng ta muốn loại bỏ các phần tử trùng lặp trong mảng kết quả thì chúng ta có thể sử dụng một Set để lưu trữ các phần tử đã được push vào mảng kết quả và chỉ push những phần tử chưa được push vào mảng kết quả.

  return [...new Set(duplicates)];
}
// Cách này có complexity là O(n + m) vì chúng ta phải duyệt qua cả 2 mảng để tìm ra các phần tử trùng lặp trong 2 mảng.

console.log(mergeAndFilterDuplicates(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6, 7]
console.log(findDuplicates(arr1, arr2)); // Output: [3, 4, 5]

const merged = [...arr1, ...arr2];

const map = new Map();

for (const num of merged) {
  map.set(num, (map.get(num) || 0) + 1);
}

console.log("map: ", map);

const result = [];

for (const value of map) {
  console.log("value: ", value);
}

for (const [key, count] of map) {
  if (count > 1) {
    result.push(key);
  }
  // Nếu trả về các phần tử chỉ xuất hiện ở 1 trong 2 mảng thì chúng ta sẽ kiểm tra nếu count === 1 thì chúng ta sẽ push key vào mảng kết quả.
  //   if (count === 1) {
  //     result.push(key);
  //   }
}
console.log(result); // Output: [3, 4]
