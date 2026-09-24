//Nếu mảng chưa sort thì bắt buộc ta phải duyệt rồi
function findIndex(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(findIndex([10, 20, 30, 40, 50], 30)); // 2
console.log(findIndex([10, 20, 30, 40, 50], 100)); // -1

// Một điểm để chuẩn bị cho bài sau: nếu mảng đã được sort, ví dụ:
// [10, 20, 30, 40, 50, 60, 70]
// thì mình có thể không cần Linear Search O(n) nữa.
// 👉 Có thể dùng Binary Search → O(log n). Đây là một trong những thuật toán quan trọng nhất khi đi phỏng vấn.

//Cách 2: Mảng đã được sắp xếp thì ta dùng thuật toán tìm kiếm nhị phân để tìm sẽ nhanh hơn
// Lúc này complex time là O(log n)
//https://chatgpt.com/s/t_6ab0ffe76dfc81919718a4ae179cbf82
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1; // bỏ nữa trái
    } else {
      right = mid - 1; // bỏ nữa phải
    }
  }

  return -1;
}

console.log(binarySearch([10, 20, 30, 40, 50, 60, 70], 60));
// 5

// Tư duy quan trọng nhất
// Binary Search không duyệt từng thằng như Linear Search. Mỗi lần nó loại bỏ một nửa vùng tìm kiếm.
