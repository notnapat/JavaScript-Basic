document.write("<h1>Not Napat</h1>");

document.write("<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>");

// let a=10;   ตัวแปลนอก function สามารถใช้ที่ไหนก็ได้ เรียกว่า global variable
//        function a=10(){

//        }
// function a(){
//     let b=50;     //ตัวแปลในปีกกาสามารถใช้แค่ในปีกกา เรียกว่า local variable
// }
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



let a=20,b=10;
console.log("ผลบวก = ",a+b);
console.log("ผลลบ =",10-10);
console.log("ผลคูณ =",a*b);
console.log("ผลหาร =",10/2);
console.log("ผลเศษ =",a%b);
console.log("ผลยกกำลัง =",10**2);

let c=5 , d=10;

console.log("เท่ากันหรือไม่ =", c == d);
console.log("ไมเท่ากันหรือไม่ =", c != d);
console.log("มากกว่าหรือไม่ =", c > d);
console.log("น้อยกว่าหรือไม่ =", c < d);
console.log("มากกว่าหรือเท่ากับหรือไม่ =", c >= d);
console.log("น้อยกว่าหรือเท่ากับหรือไม่ =", c <= d);
console.log(c+d);

let check = false; 
console.log(!check);  //สลับค่าด้วย  !!!!!!!!!!!!!!!

c=10;
//เพิ่มค่าแบบ Perfix  เพิ่ม 1 ค่า ในตัวแรกที่เติม++c 
console.log("ค่าเริ่มต้น =" ,c);
console.log("เพิ่มค่าแบบ prefix =",++c);
console.log("ค่าปัจจุบัน=",c);

c=10;
//เพิ่มค่า Postfix  เพิ่ม 1 ค่า  ในตัวถัดไปจากที่เติม  c++
console.log("ค่าเริ่มต้น =" ,c);
console.log("เพิ่มค่าแบบ Postfix =",c++);
console.log("ค่าปัจจุบัน=",c);

d=10;
//ลดค่าแบบ Perfix  ลบ   1 ค่า ในตัวแรกที่เติม --d
console.log("ค่าเริ่มต้น =" ,d);
console.log("ลดค่าแบบ prefix =",--d);
console.log("ค่าปัจจุบัน=",d);

d=10;
//ลดค่าแบบ Perfix  ลบ   1 ค่า ในตัวแรกที่เติม --d
console.log("ค่าเริ่มต้น =" ,d);
console.log("่ลดค่าแบบ prefix =",d--);
console.log("ค่าปัจจุบัน=",d);

let x=10,y=20;

console.log("ก่อน =",x);
x+=y; //x = x+y
// x-=y;  //x =x-y
// x*=y;  //x =x*y
//x/=y;   //x=x/y
//x%=y; //x=x%y
console.log("หลัง=",x);

let score = 10;

// มากกว่า 40 => D
// มากกว่า 50 => C
// มากกว่า 60 => B
// มากกว่า 70 => A

if(score >= 70){
    console.log("เกรด A");
}
else if(score > 60){
    console.log("เกรด B");
}
else if(score>50){
    console.log("เกรด C");
}
else if(score>40){
    console.log("เกรด D");
}
else {
    console.log("เกรด F");
}

let score2= 40;
let pass2;

// if(score2>50){
//     pass2 = "ผ่านเกณฑ์";
// } else{
//     pass2 = "ไม่ผ่านเกณฑ์";
// }
// console.log(pass2);

let score3 = 50;
let pass3=score3>50 ? "ผ่านเกณฑ์" : "ไม่ผ่านเกณฑ์"; //แบบย่อ
console.log(pass3);

let age4 = 22;

if(age4<=15){
    if(age4==15){
        console.log("ม.3");   
    }else if (age4==14){
        console.log("ม.2");
    }else if (age4==13){
        console.log("ม.1");
    } else {
        console.log("ประถม");
    }

} else {
    console.log("ม.ปลาย");
}

//switch   caseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
let status1 = 0; //เปิด ปิดไฟ
let light;
if (status1 == 0) {
    light = "ปิดไฟ";
} else if (status1 == 1) {
    light = "เปิดไฟ";
} else {
    light = "ไม่พบข้อมูล";
}
console.log(light);

let month2 = 5;
let name2;
switch (month2) {
    case 1:
        name2 = "มกราคม"
        break;
    case 2:
        name2 = "กุมภา"
        break;
    case 3:
        name2 = "มีนา"
        break;
    case 4:
        name2 = "เมษา"
        break;
    default:
        name2 = "ไม่มีข้อมูล";

}
console.log(name2);

//โปรแกรมคำนวณเลขคู่  /  คี่
let x2=51;
if (x2%2 == 0){
    console.log("เลขคู่");
} else {
    console.log("เลขคี่");
}

// โปรแกรมเปรียบเทียบตัวเลข
let x3=100 , y3=100;
if(x3>y3){
    console.log("x มีค่ามากกว่า");
}else if(x3<y3){
    console.log("y มีค่ามากกว่า");
}else {
    console.log("มีค่าเท่ากัน");
}
 
//while ,  for    ,do while     ,   do  for    looppppppppppppppppppppppppppppppppppppppppppppppppppp
//count++; บวกทีละ1 ,  +=3; บวกเพิ่มตามตัวเลขที่ใส่  ,  -=3; ลดลงตามจำนวนที่ใส ,   --;ลบทีละ1
let count = 2;  //จำนวนเริ่มรอบ
while(count<=5){
    console.log("ผลิตสินค้าชิ้นที่ =",count);
    if(count==3){
        break;    //ให้หยุดที่รอบนี้
    }
    count++; 
}
// while (true){
//     if(count==100) break;
//     count++;
//     console.log(count);
// }
 
for(let count2 = 30;/*ขั้นที่1*/      count2>=20; /*กำหนดว่าต้องการกี่  loop  ขั้นตอนที่   2,4,6 */       count2-=4/*ขั้นตอนที่  3,5,7  */ ){
    console.log(count2);
}

//do while  ทำใน{}ก่อน1รอบไม่สนเงื้อนไข หลังจากนั้นก็มาทำตามเงื้อนไขwhileนอกloop
let count3 =1;
do{
    console.log(count3);
    count3++;
}while(count3<=5);

//break   ,   continue
for(let count4 =1; count4<10;count4++){
    if(count4==5)continue;  //break หยุดที่ตัวเลข==5ที่ระบุ  , continue  ข้ามตัวเลขที่ระบุ==5 แล้วทำงานต่อ /3 4 6 7
    console.log(count4);
}
console.log("จบโปรแกรม"); 

//null , undefined ,NaN
let a5=null; //ไม่มีค่าใดๆ แสดงผลเหมือนกับ false ,!a=null; แสดงผลเป็น true
let a6=undefined; //let a; ค่าเริ่มที่ยังไม่ได้ระบุค่า
let a7=10*"asd"; // ค่า NaN (Not a Number)  

//Functionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
function print(){
    console.log("Hellowoeld");
}
print();
function message5(){
    alert("แจ้งเตือน");
}
function displayname(){
    document.write("Not Napat11");
}
function plusnumeber(xx){
    console.log("เลขที่ส่งมา = ",xx);
}
plusnumeber(5);
plusnumeber(10);

let number33 = 50;
plusnumeber(number33);

function fullName(fName , lName){
    document.write("ชื่อจริง =",fName ,"นามสกุล =",lName);
}
fullName("not" , "napat");
fullName("khum", "pao");
fullName("nottt");

function pulspuls(x7,y7){
    let total2 = x7+y7;
    console.log("ผลรวม=",total2);
}
pulspuls(10,20);

function getconputerIP(){
    return "127.0.0.1";
}
function getNumber(){
    return 100*100;
}
function getMyAddress(){
    let city ="ระยอง";
    return city;
}
let myIP=getconputerIP();
let total3= getNumber();

console.log("ไอพี=",myIP);
console.log("ผลคูณ =",total3);
console.log("ที่อยู่ =",getMyAddress());

function setsalaey(aaaa){
    let bonus =1000;
    return aaaa+bonus;
}
let s =setsalaey(10000);
console.log("A เงินเดือน =",s);

let dd= setsalaey(20000);
dd-=500;
console.log("B เงินเดือน =",dd);

function getname (name3,city3="gggggggg"){ //     ="ใส่ค่าเริ่มต้น" นนนนนนนนนนนนนนนนนนนนนนนน
    return name3+"      "+city3;
}
console.log(getname("เกมส์"));

// Arrayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
let number = Array(600,"200",300,400.99,500,true); //ถ้าเป็น( ) ต้องระบุArrayนำหน้า
let cout5 = number.length; //   .length=เรียกว่าเม็ดตอด คือการนับจำนวน
console.log(number);//แสดงทั่งหมด
number.push("700"); //  .push   เพิ่มข้อมูลใหม่ทีละตัวต่อท้าย
number.push(..."a,b"); // เพิ่มหลายข้อมูล
number.pop(); // ลบข้อมูลตัวสุดออก
number.shift(); // ลบข้อมูลตัวแรกออก
number.unshift("กก");//เพิ่มข้อมูลตัวแรก

let reault=number.sort(); //  .sort()  เรียงลำดับข้อมูลใน   ตัวแปลArrayนี้ใหม่ทั้งหมด   จากน้อยไปหามากตามลำดับตัวอักษร

console.log(number.sort()); //เรียงจากน้อยไปมาก โดยไม่ใช้ตัวแปล
console.log(number.reverse());//เรียงจากมากไปน้อย โดยไม่ใช้ตัวแปล
console.log(cout5); // นับจำนวนว่ามีเท่าไหร่
console.log(reault);  //แสดงการเรียงใหม่
console.log("ตัวแรก =" , number[3]);   //แสดงแค่ตัวที่ระบุ [ระบุตัวเลขในนี้]
console.log(number[0]); //แสดงตัวแรก
console.log(number[number.length-1]); //แสดงตัวสุดท้าย
console.log(number.pop()); //เอาตัวสุดท้ายออก

let colors = ["แดง","ชมพู","1เขียว","ขาว"];
colors[1] = "ดำ";   //เปลี่ยนชื่อตามตำแหน่งตัวเลข่ที่ระบุ
console.log(colors);

console.log(colors.sort());
let allnumber = number.concat(colors);
console.log(allnumber);// เอา Array มาต่อกัน by have Array [ ] ครอบ

// splice & slice  ลบ และ ดึง
const delete222 =[10,20,30,40,50]
console.log(delete222)
delete222.splice(2,2,99)   //splice จะเปลี่ยนแปลงโครงสร้างหลัก(2ตำแหน่งที่ต้องการลบ  , 2 จำนวนที่ต้องการลบนับจากตำแหน่ง , 99 เพิ่มเข้าไปแทนทีข้อมูลที่ลบ )
console.log(delete222)

const pull = [10,20,30,40,50]
console.log(pull)
const lastpull = pull.slice(1,2) //ดึงมาจะโดนลบออก1จำนวน ค่าไม่เปลี่ยนต้องสร้างตัวแปลมาครอบ
console.log(lastpull)

//ตัดตัวสุดท้าย และแสดงตัวสุดท้าย
number.pop();
let pop1 = number.pop();
console.log(pop1);

//รวม Array
let a11= ["11","22"];
let a33= ["33","44"];
let a55= ["55","66"];
a11=a11.concat(a33,a55);
console.log(a11);

//เรียงลำดับ Array

//น้อยไปมาก
number666 = [11,22,33,44,55];
number666.sort(function(a,b){
    return a-b;
});
console.log(number666);

//มากไปน้อย

number666.sort(function(a,b){
    return b-a;
});
console.log(number666);

// Loop Array   For , ForEach , ForOf

const arrayloop = [100,200,300,400,500]

for(let i=0; i<arrayloop.length;i++){
    if(arrayloop[i] >=300) break
    console.log(`number ${i} = ${arrayloop[i]}`)
}

//ForEach
arrayloop.forEach(e/*Element ,e คือข้อมูลใน Array  */ => {    //foteach ไม่สามารถ break and continewได้
    console.log(e)
})

//ForOf
for(const Element of arrayloop){
    if(Element >=400) break
    console.log(Element)
}

// Seatch for information in Array

const colors11 = ["แดง","เขียว","เหลือง","น้ำเงิน","ขาว"]

// Indexof seatch => Seatch results will get the index position  . If not found will get -1
const index= colors11.indexOf("เหลือง")
console.log(index)

//Find => Seatch results will get the informaion for seatch . If not found will get  Undefined
const find = colors11.find(element=>element==="แดง")
console.log(find)

// FindIndexo  seatch => Seatch results will get the index position  . If not found will get -1
const findIndex = colors11.findIndex(element=>element==="ขาว")
console.log(findIndex)

// Array Map 

//รวมผลคูณแต่ละตัว
const numbers2222=[10,20,30,40,50]
const aaaaa = numbers2222.map(e=>e*2/*   e*e    */)
console.log(aaaaa)
// const aaaaa= numbers2222.map(e=>{
//     return e*2
// })
// console.log(aaaaa)
// const aaaaa = numbers2222.map(e=>{
//     const a= e*2
//     return a
// })
// console.log(aaaaa)

//loopเพิ่มจำนวนตัวเลขให้แต่ละตัว
const data222=["ฝนตก","แดดออก","หนาว","อากาศดี"]
const bbbbb = data222.map((e,i)=>{
    return "วันที่"+(i+1)+"  "+"สภาพอากาศ="+e
    // return `วันที่ ${i+1} , สภาพอากาศ  = ${e}`
})
console.log(bbbbb)

// ดึงข้อมูลบางส่วน
const data22222 =[
    {day:"1/5/65",weather:"ร้อน",temp:40},
    {day:"2/5/65",weather:"หนาว",temp:20},
    {day:"3/5/65",weather:"ฝน",temp:30},
]
const ccccc = data22222.map(e=>{
    return e.weather
})
console.log(ccccc)

// Array Filter คัดกรองข้อมูล
const data666 = [
    {name:"น็อต",salary:20000,department:"โปรแกรมเมอร์" },
    {name:"นัท",salary:10000,department:"ช่างก่อสร้าง" },
    {name:"บอล",salary:10000,department:"ช่างซ่อมบำรุง" },
    {name:"ท็อป",salary:20000,department:"โปรแกรมเมอร์" },
    {name:"แมน",salary:10000,department:"ช่างฟอนิเจอร์" }  
]
const ddddd33 = data666.filter(e=>e.salary==20000).filter(e=>e.department=="โปรแกรมเมอร์")
// const ddddd33 = data666.filter(e=>{
//     return e.salary>10000
// })
console.log(ddddd33)

//  Array Reduce  นำข้อมูลใน Array มาบวกกัน
const cart = [
    {name:"กระเป๋า",price:500},
    {name:"หนังสือ",price:300},
    {name:"คอมพิ้วเตอร์",price:2000},
    
]
const allcart = cart.reduce((value,e)=>e.price+value,10)
// const allcart = cart.reduce((value,e)=>{
//     const total=e.price+value
//     return total
// },0)
console.log(allcart)

// For Loopppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
// for (let i = 0;i<number.length;i++){
//     console.log("ลำดับที่ = " ,(i+1),"มีค่า +",number[i]);
// }

// number.forEach(item);
// function item(unit){
//     console.log("color",unit);
// }

// //Array   to   Stringgggggggggggggg
// console.log(number.toString());

// let tost = number.toString();
// console.log(typeof(tost));

// //join  เปลี่ยนค่า , ใน Stringgggggggggggggg
// let tost2 = number.join("_");
// console.log(tost2);



// //javaScript Objectttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
// let product = {
//     name : "mouse",
//     price  : "1000",
//     color  : "black"
// };
// //object
// console.log("ชื่อสินค้า =",product.name);
// console.log("ราคา =",product.price);

// //array
// // let product2 = ["mouse",1000,"black"];

// // console.log("ชือสินค้า =",product2[0]);
// // console.log("ราคา =",product2[1]);


// //Object  เมธอด แบบเรียงทีเดียว
// let product222 = {
//     name : "mouse",
//     price  : "1000",
//     color  : "black",
//     Product2222 : function(){
//          return "ชื่อสินค้า = " + this.name + " ราคา = "+this.price+ " สี = "+this.color;
//     },
//     //เมธอดส่วนลด
//     discount:function(){
//         return this.price - 200;
//     }
// };
// //เรียกใช้เมธอด
// console.log(product222.Product2222());
// console.log(product222.discount());

// //  เช็ค true ---- false เช็คว่าลบหรือไม่ลบ
// function checktrue(){
//     let result=confirm ("confirm");
//     if (result){
//         console.log("delete");
//     }
//     else{
//         console.log("undelete");
//     }
// }
// //  DOMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
// // ส่วนมาก อ่างอิง id or class  จะใช้ตัวแปลเป็น const
// const pAll = document.getElementsByTagName('p'); //เช็คจำนวนแท็กทั้งหมด
// const pNot = document.getElementById('pNot');//เช็คแท็กตาม    ID
// // let id=document.querySelector('#id'); //อ้างอิงผ่าน id
// // let classa = document.querySelector('.class'); // อ้างอิงผ่าน class
// // let tags = document.querySelector('p'); // อ้างอิงผ่านแท็กแรก
// // let tagsall =document.querySelectorAll('h1') // อ้างอิงทุกแท็ก

// function renamepNot(){
//     let a =10;
//     let b =20;
//     // pNot.innerText="Napat";
//     // pNot.innerHTML="<strong>Napat</strong>";
//     pNot.innerHTML="a = "+a+" b = "+b;
//     // pNot.innerHTML=`a = ${a}   b = ${b}`;
//  }


//  // เปลี่ยน style ของ element
//  const pNot2 = document.getElementById('pNot2');
//  const pNot2C =document. querySelector('.pNot2C');

//  function renamepNot2(){    
//     //  pNot2.style.color="red";
//     //  pNot2.style.backgroundColor="yellow";

//     pNot2C.setAttribute('class','NNNNNN'); //  เปลี่ยน classssssssssssss
//  }

//  //  DOM Nodeeeeeeeeeee

//  //เลือกตัวแสดงแบบ array
//  const textall = document.querySelectorAll('p'); //ดึงข้อมูลแท็ก p
//  console.log(textall[2]);  //  เลือกแท็กที่จะแสดง 
//  console.log(textall[0].innerHTML);  // แสดงข้อมูลในแท็ก

//  // แสดงข้อมูลในแท็ก  แบบ2
//  let message6 = textall[1].innerHTML;
//  console.log(message6);

//  // add up element  to mother note
//  const menu2 = document.getElementById('menu2');
//  let count5 = 1;
//  function additem(){
//      const item = document.createElement('li');
//      item.innerText = "item"+(count5++);
//      menu2.appendChild(item);
//     }

// // delete  and  replace nodes
// const menu3 = document.getElementById('menu3');
// const item2 = document.getElementById('item2');
// const item3 = document.getElementById('item3');

// const cerateitem = document.createElement("li");
// cerateitem.innerText = "z";

// function deleteItem(){
//     menu3.removeChild(item2); //  deleteNode
// }
// function replaceItem(){
//     menu3.replaceChild(cerateitem,item3); //ReplaceNode
// }

// // Add  ,  Remove  and  Switch Toggle Class Style
// const boxcontent = document.getElementById('boxcontent');
// let status2;

// function addstyle(){
//     boxcontent.classList.add("darkMode");
// }
// function removeDarkMode(){
//     boxcontent.classList.remove("darkMode");
// }
// function switchMode(){
//     boxcontent.classList.toggle("darkMode");
//     status2 = boxcontent.classList.contains("darkMode");  // เช็คสถานะการสลับ ว่า  true and false
//     if(status2){
//         boxcontent.style.color="green";
//     }
//     else{
//         boxcontent.style.color="red";
//     }
// }

// //EventListenner

// const btn = document.getElementById('btn');

// btn.addEventListener('click',showwelcome);
// function showwelcome(){
//     alert("welcome");
// }





// //      cs6  เพิ่มเติมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมม

// //  Arrow  Function

// //  Old
// function fullName2(fname,lname){
//     return fname+lname
// }
// console.log(fullName2("not","napat"));

// //  New
// fullName2=(fname,lname)=>fname+lname
// console.log(fullName2("not","napat"))

// // Object ,  property  same name as translator just write the name of translstor

// const nameObj = "aa";
// const lnameObj = "bb";
// const NewObj = {
//      nameObj : nameObj,
//      lnameObj, 
//      showname(){
//          console.log("peoplename ="+nameObj)
//      }
// }
// console.log(NewObj);
// NewObj.showname()

// // Used String  by `_`
// const address2 =`name : ${nameObj}
// address : ${lnameObj}`
// console.log(address2);

// //  Combine Array
// const  number01 = [11,22,33]
// const  number02 = [...number01,44,55,66]
// const  number03 = [77,88,99]
// number02.push(...number03);
// console.log(number02);

// //   Rest  Parameter
// summation=(x,y,z)=>{
//     return x+y+z;
// }
// console.log(summation(50,100,200));

// //   Increase the number of values
// summation=(...numberArray)=>{
//     let total000 = 0;
//     for(let number of numberArray) total000 += number
//     return total000;
// }
// console.log(summation(1000,2000));
// console.log(summation(1000,2000,2000));

// // Destructurting Array

// //Obj
// const perduct = {
//     pen : 1,
//     pencil : 2
// }
// const {pen:pen,pencil} = perduct;
// console.log(pencil);
// console.log(pen);

// //Default Parameter    ตั้งชื่อเริ่มต้น ถ้าผู้ใช้ไม่ระบุ ก็จะใช้งานค่าเริ่มต้นที่ตั้งไว้
// getDataCustome=(name33,address33="กรุงเทพ")=>{
//     // const address = "Name = " +name33+
//     // "address33="+address33;
//     // return address;
//     const address =         `Name : ${name33}
//     Address : ${address33}`
//     return address;
// }
// console.log(getDataCustome("Not"));
