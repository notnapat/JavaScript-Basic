document.write("<h1>Not Napat</h1>");

document.write("<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>");

//alert("ดีใจด้วย");
console.log("สวัสดีสีขาว");
console.error("สวัสดีสีแดง") ;
console.warn("สวัสดีสีเหลือง");

let money = 500+20;   //number (integer)
let price    = 99.99;  //numver (float)
let message = 'Not Napat';
let name = "Kompao";

let checkName = false;
let checkProduct = true;

//   เปลี่ยนชนิดตัวแปล
let age = +"20.15";
let age2= parseInt("20.15");
let age3= parseFloat("20.15");
// let age = 20.15+"";
// let age2= 20.15.toString();

console.log(money);
console.log(price);
console.log(typeof(message));
console.log(typeof(name));   
                             
console.log(checkName);      
console.log(checkProduct);   

console.log(age);
console.log(typeof(age));
console.log(age2-50);
console.log(typeof(age2));
console.log(age3);
console.log(typeof(age3));

// let number1=1 ,number2=2 ,number3=3 ,number4=4 ,number5=5;
// let number1=1;
// let number2=2;
// let number3=3;
// let number4=4;
// let number5=5;

// Arrayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
let number = Array(100,"200",300,400.99,500,true);
console.log(number);
console.log("ตัวแรก =" , number[0]);

let colors = ["แดง","ชมพู","เขียว","ขาว"];
colors[1] = "ดำ";
console.log(colors);

let a=20,b=10;
console.log("ผลบวก = ",a+b);
console.log("ผลลบ =",10-10);
console.log("ผลคูณ =",a*b);
console.log("ผลหาร =",10/2);
console.log("ผลเศษ =",a%b);
console.log("ผลยกกำลัง =",10**2);


