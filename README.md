31/5/2022

  ### Phỏng vấn js:https://niithanoi.edu.vn/43-cau-hoi-javascript-nang-cao.html
  ### https://viblo.asia/p/mot-vai-cau-hoi-ve-javascript-ma-mot-intern-fresher-can-biet-khi-di-phong-van-L4x5x1agKBM
### bài tập: https://freetuts.net/hoc-javascript/bai-tap-javascript
### dự án thực hành : https://niithanoi.edu.vn/du-an-javascript-cho-nguoi-moi-hoc.html
# Bài 5 Khái báo biến 

* Nhúng file JS vào HTML
* phân biệt cả hoa và thường,chữ cái đầu phải là chữ đc là số
* viết in chữ cái đầu của từ thứ 2  
    example: fulNname ,myName,myPhone,myDevice,
* Viết có dấu , thì mới viết code liền nhau được 
    example: var fulNname = "maiduy"; var age = 17;

# Bài 6  Comment
* ghi chú code và project của dự án đề lần sau có thể đọc và hiểu được .
* commet 1 khối /* */
* commet 1 dòng ctrl + / 
* Vô hiệu đoạn mã trong chương trình

# Bài 7 Một số hàm built-in
   * giới thiệu 1 số hàm built
        1.Alert
        2.Console
        3.Confirm
        4.prompt // tạo một khung input nhập giá trị vào 
        5.SetTimeout // chạy 1 đoạn code hoặc chương trình sau 1 thời gian nhất định 
        6.SetInterval // hiện 1 đoạn code liên tục sau 1 khoảng thời gian- hàm này là loop mãi mãi 

# Bài 8 Làm quen với toán tử
   * giới thiệu 1 số toán tử trong javascript
        1.Toán tử số học-Arithmetics
        2.Toán tử gán Assignment
        3.Toán tử so sánh -comparison
        4.Toán tử logic- logical
# Bài 9 Toán tử số học 
   * số dư mà lớn hơn 0 là số lẻ 
   * a++ tăng thêm 1 giá trị 

# Bài 10 Toán tử ++ -- với tiền tố & hậu tố
   * tiền cộn thể giá trị và trả về giá trị sau khi được cộng  
    xem lại kỹ :https://www.youtube.com/watch?v=aM-DUx6Qnc8&list=PL_-VfJajZj0VgpFpEVFzS5Z-lkXtBe-x5&index=10

# Bài 11 Toán tử gán
x=x+y => x+=y
   *   xem thêm :https://hocjavascript.net/bien-kieu-du-lieu-toan-tu/toan-tu-trong-javascript/


# Bài 12 Toán tử chuỗi

# Bài 13 Toán tử so sánh trong Javascript phần 1
   *  xem thêm: https://freehost.page/cac-toan-tu-sanh-va-logic-trong-javascript/

# Bài 14 Toán tử boolean

# Bài 15 Câu lệnh điều kiện If
   * Ngoài những TH sau thì tất cả giá trị truyền vào if là True:
        0,false,NaN,"",'',null
        if (){

        }else{}
# Bài 16 Toán tử logical

# Bài 17 Kiểu dữ liệu trong Javascript

  * Trong JS có 6 kiểu dữ liệu cơ bản:
        * Number
        * Boolean
        * String
        * Null
        * Undefined
        * Object
   * Kiểu dữ liệu năng cao https://www.youtube.com/watch?v=P-fMQ3elxSE&list=PL_-VfJajZj0VgpFpEVFzS5Z-lkXtBe-x5&index=17
   
   # xem lại toàn tập Bài 17 !important

  # Bài 62 HTML DOM là gì?
    * 1. element
    * 2. Attribute
    * 3. Text

  ### LÀM BÀI TẬP TRÊN F8,viết 1 hàm để kiểm tra dữ liệu nhập vào



  1/6/2022
# Bài 18  Toán tử so sánh phần 2
# Bài 19Toán tử logical và câu lệnh điều kiện If
   * || => toán tử chỉ cần 1 vế đáp ứng điều kiện thôi là đc 
# Bài 19 Chuỗi
   * 1.Tạo chuỗi 
      -các cách tạo ra 1 chuỗi 
         var fullName = "maiduy"; => nên dúng cách này để tạo chuỗi vì đúng yêu cầu ban đầu 
         var data = new String ("23/10/1998"); => tạo ra 1 object

      var fullName = "maiduy \"23/10/1998\"";=> BACKSLASH in js
   * 2.Template String ES6
      console.log(` toi la ${firstname} ${lastname}`)=console.log(" toi la " + firstname + " " + lastname);
# Bài 20 cách làm việc với chuỗi 
   * keyword:javascript string methods
   * 1.length
     2.String
     3.Find index
     4.Cut String
     5.Replace String
     6.Convert to upper case
     7.Convert to lower case
     8.Trim String
     9.Get a character by index
# Bài 21 cách làm việc với chuỗi 
   * cách tạo giá trị cho number:
      1.var age = 17; 
      console.log(age);  // khởi tạo số 
      2.var othernumber = new Number(2);
      console.log(othernumber); // khởi tạo 1 đối tượng 
   mystring=age.toString();// chuyển number thành string
   console.log(result.toFixed()); // làm tròn đến số thập phân thứ 2
# Bài 22 cách làm việc với số 
   
   var age = 17; // khai báo biến 
   var pi=3.14159;
   var othernumber = new Number(2);
   console.log(age);  // khởi tạo số 
   console.log(othernumber); // khởi tạo 1 đối tượng 
   var result=49/3;
   console.log(isNaN(result));
   mystring=age.toString();// chuyển number thành string 
   console.log(result.toFixed()); // làm tròn đến số thập phân thứ 2
# Bài 23  mảng 
1 tạo mảng 
   - cách tạo mảng 
   -Sử dụng cách nào ? tại sao ?
   -Kiểm tra data type
2 truy xuất mảng 
   -Độ dài của mảng 
   -Lấy phần tử index
   console.log(Array.isArray(notation)); // kiểm tra chuỗi   
   console.log(typeof notation); // kiểm tra kiểu dữ liệu 
   console.log(language.length); // kiểm tra độ dài 
   console.log(language[4]); // lấy phần tử the index
# Bài 24 cách làm việc với mảng 
   keyword:javascript array methods
     1.To string 
     2.Join
     3.Pop
     4.Slice
     5.Push
     6.Shift
     7.unshift
     8.splicing
     9.concat
# Bài 25 cách làm việc với hàm
     1.Hàm ?
      - 1 khối mã 
      -Làm 1 việc cụ thẻ 
     2.Loại hàm
      -Built-in
      -Tự định nghĩa 
     3.Tính chất
      -Không thực thi khi định nghĩa
      -Sẽ thực thi khi được gọi 
      -Có thể nhận tham số 
      -Có thể trả về một giá trị 

     4.Tạo hàm đầu tiên
# Bài 26 Tham số trong hàm
   1.Tham số 
      -Định nghĩa 
      -Kiểu dữ liệu
      -Tính private
      - 1 tham số 
      -Nhiều tham số 
     2.Truyền tham số 
      -1 tham số 
      -Nhiều tham số
  
     3.Arguments?
      -Đối tượng Arguments
      -giới thiệu vòng for  

# Bài 27 Return trong hàm


# Bài 28 Hiểu hơn về function
   1.Khi function đặt trùng tên
   2.Khai báo biến trog hàm
   3.Định nghĩa hàm tring hàm 

# Bài 29 Các loại function
   các loại function
   1.Declaration function
   2.Expression function
   3.Arrow function
   function showMessage() {
    console.log("Declaration function");

};

var showMessage2=function() {
    console.log("Expression function")
};


# Bài 29 Polyfill
   xem lại
# Bài 30 Object