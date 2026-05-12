//Bài này có dạng Find Second Largest Number
// Pattern:
// traversal
// tracking max
// Học:
// optimize O(n log n) → O(n)

//Cách 1: chúng ta sẽ giải quyết bài toán với Big-O là O(n log n) bằng cách filter các phần tử trùng nhau và sau đó sắp xếp mảng theo thứ tự giảm dần và trả về phần tử thứ 2.

//Cách 2: Chúng ta sẽ sử dụng 2 biến là secondMax và max để theo dõi số lớn nhất và số lớn thứ 2. Chúng ta sẽ duyệt qua mảng một lần và cập nhật giá trị của max và secondMax khi cần thiết.
//Cách này có Big-O là O(n) vì chúng ta chỉ duyệt qua mảng một lần.

//Phân tích bài toán với các trường hơp:
// Trường hợp 1: nếu mảng null => return null
// Trường hợp 2: nếu mảng có ít hơn 2 phần tử => return null
// Trường hợp 3: Nếu mảng chỉ có 2 phần từ thì chúng ta sẽ so sánh 2 phần tử đó và trả về phần tử nhỏ hơn trong 2 phần tử đó vì nó sẽ là số lớn thứ 2.
// Trường hợp 4: nếu mảng có 2 phần tử trở lên => chúng ta sẽ dùng cách 1 hoặc cách 2 để giải quyết bài toán.

//Giải quyết bài toán
//Cách 1: Dùng Set và sort
function findSecondLargestC1(arr) {
  if (!arr || arr.length < 2) {
    return null;
  }

  //Set này sẽ loại bỏ các phần tử trùng nhau trong mảng và trả về một mảng mới chỉ chứa các phần tử duy nhất.
  // Sau đó, chúng ta sẽ sắp xếp mảng này theo thứ tự giảm dần và trả về phần tử thứ 2,
  // đó chính là số lớn thứ 2 trong mảng ban đầu. Nếu mảng sau khi loại bỏ trùng nhau có ít hơn 2 phần tử, chúng ta sẽ trả về null.
  const uniqueNumbers = [...new Set(arr)];

  if (uniqueNumbers.length < 2) {
    return null;
  }

  uniqueNumbers.sort((a, b) => b - a);

  return uniqueNumbers[1];
}
// Ở cách này complexity của nó là O(n log n) vì chúng ta phải sắp xếp mảng sau khi loại bỏ trùng nhau.

//Cách 2: Dùng 2 biến để theo dõi max và secondMax
function findSecondLargestC2(arr) {
  if (!arr || arr.length < 2) {
    return null;
  }

  if (arr.length === 2) {
    //Nếu mảng chỉ có 2 phần tử thì chúng ta sẽ so sánh 2 phần tử đó và trả về phần tử nhỏ hơn trong 2 phần tử đó vì nó sẽ là số lớn thứ 2.
    // => complexity của trường hợp này là O(1) vì chúng ta chỉ cần so sánh 2 phần tử và trả về kết quả.
    return Math.min(arr[0], arr[1]);
  }

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }

  return secondMax === -Infinity ? null : secondMax;
}
// Cách này có complexity là O(n) vì chúng ta chỉ duyệt qua mảng một lần để tìm số lớn nhất và số lớn thứ 2.
