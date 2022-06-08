// khai báo biến 
// console.log("hello world");

// alert("CẢNH BÁO");
// alert("hello world");


// alert(fulNname);
// alert(age);

// console.log("12343567");
// console.error("404");


// confirm("you have messages");

// setInterval(function() { 
//     console.error("404" + Math.random());
// },1000)



// Bài 8 Làm quen với toán tử


// var b=6;
// if (a>0&& b>0) {
//     alert(" a và b lon hon 0");
// }
// alert(fulNname);
// var c=a/b;console.log(c);


// # Bài 10 Toán tử ++ -- với tiền tố & hậu tố
// var t="string";
// var b="fulNname";
// var c="maiduy";
// var condition="điều kiện";
// if (c)
// {
//     console.log(condition+ " đúng");
// }else {
//     console.log(condition+ " sai");

// };




// // number type 
// var school = "PTH";
// console.log(school);
// console.log(school+ c);

// var myoject={
//     name: "maiduy",
//     age: "18",
//     address:"TP HCM ",
    
// };console.log("myoject",myoject);
// console.log(typeof(myoject));
// console.log(typeof(a));
// console.log(typeof(s));


/* Toán tử so sánh phần 2*/
// === so sánh đến kiểu dữ liệu
// == chỉ so sánh giá trị .
// var a=1;
// var b=4;
// var result= NaN||"8"||"0";

// console.log(result);

// if (result) {
//     console.log("DIEU KIEN DUNG ");
    
// } else {
//     console.log("DIEU KIEN SAI");}

//  Bài 19 Chuỗi

// var fullName = "maiduy \"23/10/1998\""+"SG";
// var string="day la dau \\";
// console.log(fullName);
// console.log(fullName.length); // in ra số lượng ký  tự 
// console.log(string.length);

// var firstname = "mai";
// var lastname = "duy";
// console.log(" toi la " + firstname + " " + lastname);
// console.log(` toi la ${firstname} ${lastname}`);

// # Bài 20 cách làm việc với chuỗi 



// 1.length
//      2.String
// var mystring="Học JS tại F8! JS JS";


//      3.Find index
// var mystring="Học JS tại F8! JS JS";

// console.log(mystring.indexOf("JS",6));
// console.log(mystring.lastIndexOf("md"));
// console.log(mystring.search("JS")); // tìm kiếm theo biểu thức chính quy

//
//      4.Cut String
// var mystring="Học JS tại F8!";
// console.log(mystring.slice(-3,-1));
// console.log(mystring.slice(4));

//      5.Replace 

// console.log(mystring.length);
// console.log(mystring.replace("JS","PYTHON"));
// var stringreplace =mystring ;
// console.log(stringreplace.length);


//      6.Convert to upper case
//      7.Convert to lower case
//      8.Trim String
//      9.Get a character by index
// var gmail="duy.mai2310@gmail.com";
// var password="123456789"

/** KIỂM TRA MẬT KHẨU **/
/** 
var checkpassword = function (gmail,password){
    if (gmail=="duy.mai2310@gmail.com"&& password=="123456789") {
        console.log("DUNG MAT KHAU ");
    } else {
        console.log("SAI MAT KHAU"); 
    }
};

checkpassword("duy.mai2310@gmail.com","12356789");*/

// Số và làm việc với số

//  var age = 17; // khai báo biến 
//  var pi=3.14159;
//  var othernumber = new Number(2);

// console.log(age);  // khởi tạo số 
// console.log(othernumber); // khởi tạo 1 đối tượng 

// var result=49/3;
// console.log(isNaN(result));
// mystring=age.toString();// chuyển number thành string 

// console.log(result.toFixed()); // làm tròn đến số thập phân thứ 2

// Số và làm việc với mảng 

// 1.To string 
// console.log(language.toString()); // biến mảng thành chuỗi 
// 2.Join
//  console.log(language.join("|| "));
// 3.Pop
// console.log(language);
// console.log(language.pop());// xóa phần tử ở cuối mảng rồi trả lại phần tữ đã xóa 


// 4.Slice

// console.log(language.slice(-1, -3));
// 5.Push
// console.log(language.push("koltin")); // thêm phần tử ở phía cuối 
// console.log(language);
// console.log(language.push("tin")); 
// console.log(language);
// 6.Shift
// console.log(language.unshift('mai',"Duy")); // thêm phần tử ở đầu 
// console.log(language);

// 7.unshift
// 8.splicing
// console.log(language.slice(0,2));

// language.slice(0,2,"darf");

// console.log(language.slice(1,0,"darf")); // xóa chèn thêm phần tử vào mảng 

// 9.concat
// var language2=[
//     "python",
//     "C",
//     "js",
//     "ruby",
//     "mysql",
//     "myname"
// ]
// console.log(language.concat(language2));

//  function showDialog()
// {
    //     alert("xin chào các bạn");
    // };
    
    // Bài 26 Tham số trong hàm
    
    //  function showDialog(messages)
    // {
        //     var string="";
        //     for(var param of arguments)
        //     {
            //         string+=param +"_";
            //         // console.log(string); 
        
            //     }
            //     console.log(string); 
            //     console.log(string.slice(0,-1));
            //     mystring=string.slice(0,-1);
//     console.log(mystring);
// }

// showDialog("log1","log2","log3","log4","log5","log6");
// Bài 27 Return trong hàm
// var isCofirm = confirm("messages");

// function cong(a,b){
    //     return a+b;
    // }
    
    // console.log(cong(5,6));
    
    // function mysql() {
        
        //     function cong(a,b){
            //             return a+b;
            //         }
            
            
            //     console.log(cong(3,6));
            //     cong(4,6);
            //  }
            // mysql();
            // # Bài 29 Các loại function
            // function showMessage() {
                //     console.log("Declaration function");
                
                // };
                
                // var showMessage2=function() {
                    //     console.log("Expression function")
                    // };
                    
                    // var gmail="email";
                    
                    // var myInfor ={
                        //     name: "Mai Duy", // thuộc tính 
                        //     address: "123",
                        //     number: "097865643",
                        //     age: 23,
//     gmail:"duy.mai2310@gmail.com",
//     getName: function() {  // phương thức
//         return this.name;
//     }

// };

// console.log(myInfor.getName());
// // console.log(typeof myInfor.getName);


// BT

// viết hàm tìm kiếm trong chuỗi
function searchVariable(arguments) {
    console.log(arguments);
}

// viết 1 hàm chuyển string  thành array
function S_convert_A(user_gmail) {
    
    var array = user_gmail.split("");
    console.log("chuyễn chuỗi thành mảng :",array);
    
}

// viết 1 hàm chuyể từ chữ thường sang chữ hoa
function user_toUpperCase(arguments) {
    UserUpperCase=arguments.toUpperCase();
    console.log(UserUpperCase);
}

// hàm chính 
function main() {
    // getDataInput();
    user_name  = prompt("Mời bạn nhập tên của mình");
    user_gmail = prompt("Mời bạn nhập gmail của mình"); 
    console.log("Đây là gmail của bạn :",user_gmail);
    
    //chuyển chuổi thành Array
    // user_toUpperCase(user_gmail);
    // S_convert_A(user_gmail);
    searchVariable(user_name);
}

// viết 1 hàm lấy g iá trị từ prompted

function getDataInput(inputBox){
    user_gmail = prompt("Mời bạn nhập tên của mình"); 
    console.log("Đây là gmail của bạn :",user_gmail);
     
}
// viết hàm kiểm tra tính hợp lệ dữ liệu đầu  vào của user_name
/*tạo 1 mảng chứa ký tự đặt biết rồi lấy từng ký tự để tìm kiếm trong user_name
   B1 tạo 1 mảng chứa các ký tự đặc biệt
   var ArraySyntaxError= ["!","@","#","$","%","&","^","*","(","_","="]; 
   B2 in từng phần tử của mảng đó => dùng for 
   B3 Dùng hàm includes("checkvalue") để kiểm tra từng trường hợp => dùng switch || for 

viết hàm kiểm tra tính hợp lệ dữ liệu đầu  vào của user_gmail*/


    

main();
var language=[
    "python",
    "C",
    "js",
    "ruby",
    "mysql",
    "myname",
    "@",
]

checkSymbol=language.includes("mysql");
if(checkSymbol==false){
    console.log("du lieu sai");
    // sai thì làm gì => viết 1 chương trình nhập lại user_name
}else{
    console.log("du lieu dung");
    // đúng thì lưu dữ liệu lại tiếp tục chương trình tiếp theo 
}

for (var i = 0; language.length>0; i++) {
    console.log(language[i]);}