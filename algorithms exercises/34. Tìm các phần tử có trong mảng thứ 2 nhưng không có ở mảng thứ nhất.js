//Tìm các phần tử có trong mảng thứ 2 nhưng không có ở mảng thứ nhất
//Có 3 trường hợp:
// Trường hợp 1: nếu cả 2 mảng đều null => return null
// Trường hợp 2: nếu một trong 2 mảng null => return [] vì nếu một trong 2 mảng null thì sẽ không có phần tử nào trong mảng thứ 2 có thể xuất hiện trong mảng thứ nhất nên kết quả sẽ là một mảng rỗng.
// Trường hợp 3: nếu cả 2 mảng đều có phần tử => chúng ta sẽ dùng một Set để lưu trữ các phần tử của mảng thứ nhất và
//  sau đó duyệt qua mảng thứ 2 để kiểm tra xem phần tử nào trong mảng thứ 2 không có trong Set của mảng thứ nhất và trả về một mảng chứa các phần tử đó.

//Giải quyết bài toán
function findElementsInSecondArrayNotInFirst(arr1, arr2) {
  if (!arr1 && !arr2) {
    return null;
  }

  if (!arr1) {
    return [];
  }

  if (!arr2) {
    return [];
  }

  const set1 = new Set(arr1);
  const result = [];

  for (let num of arr2) {
    if (!set1.has(num)) {
      result.push(num);
    }
  }

  return [...new Set(result)]; // Nếu chúng ta muốn loại bỏ các phần tử trùng lặp trong mảng kết quả thì chúng ta có thể
  // sử dụng một Set để lưu trữ các phần tử đã được push vào mảng kết quả và chỉ push những phần tử chưa được push vào mảng kết quả.
}
// Cách này có complexity là O(n + m) vì chúng ta phải duyệt qua cả 2 mảng để tìm ra các phần tử trong mảng thứ 2 mà không có trong mảng thứ nhất.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

console.log(findElementsInSecondArrayNotInFirst(arr1, arr2)); // Output: [6, 7]
