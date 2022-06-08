TH1 write 1 function for cut string or arry 

<!-- function stringHandling(){
    console.log("begin");
    var mystring = "Học JS tại F8!";
    var mystring1 = "Học web tại F8!";

    
    // var start=1;
    // var end=4;
    var cutString = function (start,end) {
        if (end == false ) {
            console.log("1.chuỗi cần lấy là :"+mystring.slice(start))
            
        } else {
            console.log("1.chuỗi cần lấy là :"+mystring.slice(start,end))
            var stringhandled=mystring.slice(start,end);
            var result = stringhandled+ "_";
            console.log(result);
        }
     
    }
    var stringConcatenation= function (arguments1,arguments2) {
        console.log("2.string concatenation")
        console.log( arguments1 + " + " + arguments2 );

 
       
    };
    cutString(0,0);
    stringConcatenation(mystring,mystring1);
 

}
stringHandling(); -->

TH2
 function showDialog(messages)
{
    var string="";
    for(var param of arguments)
    {
        string+=param +"_";
        // console.log(string); 
        
    }
    console.log(string); 
    console.log(string.slice(0,-1));
    mystring=string.slice(0,-1);
    console.log(mystring);
}

showDialog("log1","log2","log3","log4","log5","log6");

* 1 hàm chỉ đảm nhiệm 1 chức năng 

VIẾT 1 HÀM TÍNH NĂNG ĐỂ BỎ DẤU GẠCH NGANG CUỐI HÀNG 
TH3:
viết 1 hàm tìm kiếm chuỗi truyền vô với giá trị bất kỳ ví dụ tìm kiếm có bao nhiễu chữ a trong 1 cái tên 

<!-- TH4: viết 1 hàm chuyển từ chữ hoa thành chữ thường và ngược lại  -->

TH5: lập trình máy tính bỏ túi 

<!-- TH6: lập trình lấy dữ liệu từ ô input của JAVA
function main() {
    // getDataInput();
    user_name  = prompt("Mời bạn nhập tên của mình");
    user_gmail = prompt("Mời bạn nhập gmail của mình"); 
    console.log("Đây là gmail của bạn :",user_gmail);} -->

TH7:Làm bài tập về indexOf
TH8:kiểm tra độ mạnh của mật khẩu
cứ tạo 1 đối tượng rồi truyền key: value vào cho đối tượng khi đã truyền xong thì mới lấy thuộc tính của từng đối tượng ra kiểm tra (kiểm tra khi khách hàng ấn sumit)
TH9:ổn bài tập xử lý chuỗi  MẢNG 

TH10:IN RA SỐ LẦN NHẬP LẤY TỪ Ô INPUT prompt