/* Object
var emailkey = "email";

var myInfor={
    name:"maiduy1998",
    age:19,
    address:"Sài gòn ,VN",
    [emailkey]:"duy.mai2310@gmail.com",
    phone:"097865643",
    mykey :1234,
    getName: function () {
        return this.phone;
    }
};


// console.log(myInfor.mykey);   // sẽ in ra thuộc tính mykey trong đối tượng 
// console.log(myInfor[mykey]); // in ra thuộc tính address trong myInfor
delete myInfor.age;
delete myInfor.mykey;
console.log(myInfor.getName()); */


// Bài 31 Object constructor

function User(firstname,lastname,avatar,status){
    this.firstname = firstname;
    this.lastname = lastname;
    this.avatar = avatar;
    this.status = status;
    this.getName = function () {
        return `${this.firstname} ${this.lastname}`;
    }

}

var author = new User (" Mai","Duy","mem","on");

author.title = "chào các bạn"; // thêm thuộc tính cho author

User.prototype.classname = "F8";

var user = new User (" Vũ ","Nguyễn ","avater","off");
user.comments="khi nào có cà phê";

// console.log(author.getName());
// console.log(user.getName());
console.log(author);
console.log(author.classname);
console.log(author);
