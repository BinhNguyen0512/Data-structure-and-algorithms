class DynamicArray {
  constructor() {
    this.capacity = 0; // initial capacity => nó là sức chứa ban đầu
    this.array = new Array(this.capacity);
    this.size = 0;
  }

  resize() {
    this.capacity = this.capacity === 0 ? 1 : this.capacity * 2;
    const newArray = new Array(this.capacity);

    //This.size phía dưới cũng chính là this.array.length, nhưng chúng ta sẽ dùng this.size để đảm bảo
    // rằng chúng ta chỉ sao chép những phần tử đã được thêm vào mảng, không phải tất cả các phần tử trong mảng mới
    // (vì mảng mới có thể có nhiều phần tử hơn so với số lượng phần tử thực tế đã được thêm vào).
    for (let i = 0; i < this.size; i++) {
      newArray[i] = this.array[i];
    }
    //Overide cái array cũ bằng cái array mới đã được resize
    this.array = newArray;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  set(index, value) {
    //Set giá trị tại một chỉ số cụ thể
    if (index < 0 || index >= this.size) {
      throw new Error(`Index: ${index}, Size: ${this.size}`);
    }

    this.array[index] = value;
  }

  clear() {
    // Clear về initial state (trạng thái ban đầu)
    for (let i = 0; i < this.size; i++) {
      this.array[i] = undefined;
    } //Clear tất cả phần tử trong mảng bằng cách gán undefined
    this.size = 0;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error(`Index: ${index}, Size: ${this.size}`);
    }
    return this.array[index];
  }

  add(value) {
    // Check số lượng hiện tại gần tràn rồi thì cần phải nạp thêm bộ nhớ vào
    // Ví dụ đơn giản, capacity hiện tại là 10, nếu size đã đạt 10 thì cần phải resize để tăng gấp đôi capacity lên thành 20
    // => Cái size này sẽ không bao giờ lớn hơn capacity, nó sẽ luôn nhỏ hơn hoặc bằng capacity vì chúng ta
    //Đã cover cái trường hợp này rồi
    if (this.size === this.capacity) {
      this.resize();
    }

    this.array[this.size] = value;
    this.size++;
  }

  //Giải theo youtube
  //Khi muốn remove 1 e tại một index nào đấy, tức là mình phải gỡ cái thằng đó ra
  // Và đưa tất cả những thằng đằng sau dồn lên một nấc, đồng thời luôn muốn giữ cái capacity không đổi, chỉ có size là giảm đi thôi
  // để bảo tồn dữ liệu, nên là khi chúng ta xóa bớt một E rồi thì chúng ta cũng sẽ vừa thụt cái size, và cũng vừa thụt cái
  // capacity luôn
  //---- Đây là giải thích tự động
  // Khi muốn remove một phần tử tại một chỉ số cụ thể
  // chúng ta cần phải shift (dịch chuyển) tất cả các phần tử sau đó sang trái
  // để lấp đầy khoảng trống do phần tử bị xóa tạo ra.
  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new Error(`Index: ${index}, Size: ${this.size}`);
    }

    for (let i = index; i < this.size - 1; i++) {
      this.array[i] = this.array[i + 1];
    }

    this.array[this.size - 1] = undefined;
    this.size--;
    // Cái này thiếu sét cái capacity về đúng cái size của nó => Không nên set vì mỗi lần xoá là bạn tạo array mới/copy lại data.
  }

  //Hàm indexOf tự viết
  indexOf(value) {
    for (let i = 0; i < this.size; i++) {
      if (this.array[i] === value) {
        return i;
      }
    }
    return -1; //Nếu không tìm thấy giá trị, trả về -1
  }

  //Thuật toán insert là khi muốn chèn một phần tử tại một chỉ số cụ thể, chúng ta cần phải shift (dịch chuyển) tất cả các phần tử sau đó sang phải để tạo khoảng trống cho phần tử mới.
  // Ví dụ, nếu chúng ta muốn chèn một phần tử tại chỉ số 2, chúng ta sẽ dịch chuyển tất cả các phần tử từ chỉ số 2 trở đi sang phải để tạo khoảng trống cho phần tử mới.
  // Sau đó, chúng ta sẽ gán giá trị mới vào chỉ số 2 và tăng kích thước của mảng lên một đơn vị.
  // Cũng giống như hàm remove, chúng ta cũng cần phải kiểm tra xem chỉ số có hợp lệ hay không trước khi thực hiện thao tác chèn.
  // Nếu chỉ số không hợp lệ, chúng ta sẽ ném ra một lỗi.
  // Ngoài ra, nếu kích thước của mảng đã đạt đến giới hạn của nó (capacity), chúng ta cũng cần phải gọi hàm resize để tăng gấp đôi kích thước của mảng trước khi thực hiện thao tác chèn.
  // Điều này đảm bảo rằng chúng ta có đủ không gian để chứa phần tử mới mà không gặp phải lỗi tràn bộ nhớ.
  // Tóm lại, thuật toán insert bao gồm các bước sau:
  // 1. Kiểm tra xem chỉ số có hợp lệ hay không. Nếu không, ném ra một lỗi.
  // 2. Nếu kích thước của mảng đã đạt đến giới hạn của nó (capacity), gọi hàm resize để tăng gấp đôi kích thước của mảng.
  // 3. Dịch chuyển tất cả các phần tử từ chỉ số chèn trở đi sang phải để tạo khoảng trống cho phần tử mới.
  // 4. Gán giá trị mới vào chỉ số chèn.
  // 5. Tăng kích thước của mảng lên một đơn vị.
  insert(index, value) {
    if (index < 0 || index > this.size) {
      throw new Error(`Index: ${index}, Size: ${this.size}`);
    }

    if (this.size === this.capacity) {
      this.resize();
    }

    for (let i = this.size; i > index; i--) {
      this.array[i] = this.array[i - 1];
    }

    this.array[index] = value;
    this.size++;
  }
}

// run
const dynamicArray = new DynamicArray();

for (let i = 0; i < 15; i++) {
  dynamicArray.add(i);
}

for (let i = 0; i < dynamicArray.size; i++) {
  console.log(dynamicArray.get(i));
}
