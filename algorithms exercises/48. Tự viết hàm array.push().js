function pushElement(arr, ...elements) {
  for (const element of elements) {
    arr[arr.length] = element;
  }

  return arr.length;
}

const nums = [10, 20, 30];

const newLength = pushElement(nums, 40, 50, 60);

console.log(nums);
// [10, 20, 30, 40, 50, 60]

console.log(newLength);
// 6

// Nếu thêm k phần tử:
// Time:  O(k)
// Space: O(1) auxiliary
// Còn nếu bài chỉ yêu cầu thêm một phần tử:
// function pushElement(arr, element) {
//   arr[arr.length] = element;
//   return arr.length;
// }
// thì về mặt thuật toán là O(1) amortized.
// Bài này interviewer chủ yếu muốn xem mình có hiểu:
// Array
// index cuối = length - 1
// index để append = length
// hay chỉ quen gọi .push() thôi 😆.
