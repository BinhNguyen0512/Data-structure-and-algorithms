//Đổi chỗ 2 vị trí trong mảng
//Bài này dùng pattern swap pattern
//Trường hợp 1: nếu mảng null => return null
//Trường hợp 2: nếu mảng có ít hơn 2 phần tử => return mảng vì chúng ta không thể đổi chỗ 2 phần tử trong mảng nếu mảng có ít hơn 2 phần tử.
//Trường hợp 3: nếu mảng có 2 phần tử trở lên => chúng ta sẽ dùng một biến tạm để lưu trữ giá trị của phần tử tại vị trí index1,
// sau đó gán giá trị của phần tử tại vị trí index2 cho phần tử tại vị trí index1, và cuối cùng gán giá trị của biến tạm cho phần tử tại vị
// trí index2 để hoàn thành việc đổi chỗ 2 phần tử trong mảng.

function swap(arr, index1, index2) {
  if (!arr || arr.length < 2) {
    return arr;
  }

  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

  return arr;
}

console.log(swap([1, 2, 3, 4, 5], 1, 3)); // Output: [1, 4, 3, 2, 5]

//Cách này có complexity là O(1) vì chúng ta chỉ thực hiện một số phép gán để đổi chỗ 2 phần tử trong mảng mà không cần phải duyệt qua mảng.

//Nếu bài toán đổi thành: Đổi chỗ 2 vị trí trong mảng mà không dùng biến tạm thì chúng ta sẽ giải quyết bài toán như sau:
function swapWithoutTemp(arr, index1, index2) {
  if (!arr || arr.length < 2) {
    return arr;
  }

  arr[index1] = arr[index1] + arr[index2];
  arr[index2] = arr[index1] - arr[index2];
  arr[index1] = arr[index1] - arr[index2];

  return arr;
}

console.log(swapWithoutTemp([1, 2, 3, 4, 5], 1, 3)); // Output: [1, 4, 3, 2, 5]

// Cách này cũng có complexity là O(1) vì chúng ta chỉ thực hiện một số phép toán để đổi chỗ 2 phần tử trong mảng mà không cần phải duyệt
