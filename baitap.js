// viết hàm kiểm tra tính hợp lệ dữ liệu đầu  vào của user_name
/*tạo 1 mảng chứa ký tự đặt biết rồi lấy từng ký tự để tìm kiếm trong user_name
   B1 tạo 1 mảng chứa các ký tự đặc biệt
   var ArraySyntaxError= ["!","@","#","$","%","&","^","*","(","_","="]; 
   B2 in từng phần tử của mảng đó => dùng for 
   B3 Dùng hàm includes("checkvalue") để kiểm tra từng trường hợp => dùng switch || for 

*/

// B1 tạo 1 mảng chứa các ký tự đặc biệt


// var user_gmail = "maiduy1998$0"; // đây là tên người dùng nhập vào 
// checkGmail(user_gmail);


console.log(checkGmail(user_gmail));
user_gmail = prompt("Mời bạn nhập gmail của mình"); 

var change=0;

while(checkGmail(user_gmail)!==0||change==5)
{
    // user_name  = prompt("Mời bạn nhập tên của mình");
   
    // console.log("Đây là gmail của bạn :",user_gmail);

 change =change+1;
 function checkGmail (str) {

    const ArraySyntaxError= ["!","@","#","$","%","&","^","*","(","_","="]; 

    var ArrayUserGmail = function (str) {
    return ArrayUserGmail=str.split("");
    }
    const checkValue=ArrayUserGmail(user_gmail);
    var SaveResult=[];
    // B2 in từng phần tử của mảng đó => dùng for 
    for (var i =0; i<ArraySyntaxError.length;i++) { 
    // console.log(ArraySyntaxError[i]); // in ra mảng 
    result=checkValue.includes(ArraySyntaxError[i]);
     n=i+1;
    // console.log("kiem tra lan " + n +":" + result);
    if (result==true)
    {
        // console.log(ArraySyntaxError[i]);
        SaveResult.push(ArraySyntaxError[i]);
    }
    
}
return SaveResult.length;
}
}