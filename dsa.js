for (i = 0; i < n; i++) {
  for (j = 0; j < n; j++) {}
}

// f(n) = n*n = n^2, O(f(n)) = O(n^2)
// Vì vòng lặp i chạy n lần và vòng lặp j cũng chạy n lần => n*n

for (i = 0; i < n; i++) {
  for (j = i; j < n; j++) {}
}
// Nếu thay j = i thì nó lại khác đi
// f(n) = n => Vòng ngoài thì nó sẽ chạy n lần, nhưng vào vòng trong nó lại khác
// Có phải là vòng đầu khi i = 0, thì vào vòng trong nó sẽ chạy n lần tại vì cái j bắt đầu = 0 và chạy tới n. Và tiếp theo khi i nó bằng 1
// thì j sẽ bắt đầu chạy từ 1 đến n thì có phải số lần mà nó chạy sẽ thành là n - 1, và tiếp theo n - 2....
// => f(n) = n + (n-1) + (n-2) + ..... 3 + 2 + 1
//         = (n + 1)*n/2
//         = (n^2 + n)/2
//         = (n^2)/2 + n/2
// Như đã nói, khi chúng ta tính giá trị của BigO trong function như thế này thì chúng ta luôn luôn lấy cái có giá trị lớn nhất và ở đây chúng ta có n^2
// => O(f(n)) = O(n^2)
// Công thức tính tổng của dãy số cách đều = (Số hạng đầu + Số hạng cuối) x Số số hạng của dãy : 2

for (i = 0; i < n; i++) {
  if (arr[i] === value) {
    return;
  }
  return -1;
}

// Hầu hết các bạn mới học đều sẽ nghĩ ngay đến hướng này
// f(n) = cn O(f(n)) = O(n)
// => Basic nhất, không cần suy nghĩ gì nhiều

// low = 0, high = n -1;
// Thì cái idea sẽ là low và high sẽ nằm 2 bên, nó sẽ chạy vào ở giữa cái vòng loop. Nếu mà bằng cái
// value á thì tui sẽ return nó ra. Nhưng mà nếu như thằng ở giữa nó bé hơn value á, thì tui
// sẽ dịch cái low của tui lên
// Ví dụ: có 8 phần tử => (low + high)/2 = mid => nếu mid < value => thằng low phải lớn hơn mid (low = mid + 1) => Cái này gọi là cắt mảng để tìm
while (low <= high) {
  var mid = (low + high) / 2;
  if (arr[mid] === value) return mid;
  if (arr[mid] < value) low = mid + 1;
  else high = mid - 1;
}
// return -1;

for (i = 0; i < n; i++) {
  for (j = 0; j < 2 * n; j++) {}
  for (j = 0; j < 3 * n; j++) {}
}

// f(n)= n*(2*n + 3*n)= 5n^2, O(f(n)) = O(n^2)

for (i = 0; i < n; i++) {
  for (j = 0; j < 40; j++) {}
  for (j = 0; j < n * n; j = j + 2) {}
}

// f(n)= n*(40 + n*n/2) = n^3/2 + 40n, O(f(n)) = O(n^3)
// cái j chỗ này là j =j+2 nên số lần thực hiện của nó sẽ là 1 nữa so với j++
