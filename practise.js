// var myArr = ['a','b','c','d'];

// for(element of myArr){

//     console.log(element)
// }

// var countrys =['bangladesh','india','afganistan','sudan','pakistan'];

// var [a,,,,c] = countrys;

// console.log(c);

// var mySet = new Map();

// mySet.set('poorCountry','Bangladesh')
// mySet.set('richCountry','England')
// mySet.set('Islamic','Saudi Arabia')
// mySet.set('small','vatican city')
// mySet.set('richCountry2','England')

// mySet.delete('poorCountry')
// mySet.clear();
// console.log(mySet.get('Islamic'));

// for(let myValues of mySet.values()){
//     console.log(myValues);
// }
// if(mySet.has('richCountry')){
//     console.log("Yes");
// }
// else{
//     console.log("No")
// }

// let mySet = new Set();

// mySet.add('Bangladesh');
// mySet.add('india');
// mySet.add('Bangladesh');

// console.log(mySet);

// let mySet = new Set();

// mySet.add('Bangladesh');
// mySet.add('England');
// mySet.add('Saudi Arabia');
// mySet.add('vatican city');
// mySet.add('England');

// console.log(mySet.size);

// class myClass{
// myFun() {
//     console.log('Hello this is function');
// }
//  myFun2() {
//     console.log('Hello this is function');
// }
// myFun3() {
//     console.log('Hello this is function');
// }
// myFun4() {
//     console.log('Hello this is function');
// }
// }

// var obj = new myClass;

// obj.myFun();
// obj.myFun2();
// obj.myFun3();

// class myClass{
//     constructor(...x){
//         console.log(x);
//     }
// }

// new myClass(3,4,5,6,7,8,2,8);

// class myClass{
//     constructor (a,b){
//         this.firstName =a;
//         this.secondName =b;
//     }

// add(){
//     let result  = this.firstName + this.secondName;
//     console.log(result);
// }
// }

// let obj = new myClass(12,10);
// obj.add();

// class myClass{

//     static hello(){
//         console.log("Hello world");
//     }
// }

// myClass.hello()

// class parent{
//     hello(){
//         console.log("Hello World");
//     }
//     hello2(){
//         console.log("Hello World3");
//     }
// }

// class child extends parent{

// }

// let obj = new child;
// obj.hello();
// obj.hello2();
// class parent{

//     hello4(){
//         console.log("htidsiddlfjdl")
//     }
// }

// class child extends parent{
//     hello4(){
//         console.log("this is not equal");
//     }
// }

// var obj = new child();

// obj.hello4();

// import { cosmetics,mobilephone } from "./hello.js";

// cosmetics();
// mobilephone();

// function evenify(num){
//     if(num%2==0){
//         console.log(num,"this is even");
//     }
//     else{
//         console.log(num,"this is odd")
//     }
// }

// const nums =[3,5,2,6,7];

// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     evenify(num);
// }

// const todoForm = document.querySelector('.todoForm');
// const todoTask = document.querySelector('.todoTasks');
// const taskLists = [];
// function handleSubmit(e){
//     e.preventDefault();

//     const inputData = e.target.insert.value;

//     const task ={
//         id : Date.now(),
//         task: inputData,
//         isCompleted:false,
//     }
//     taskLists.push(task);
// e.target.reset();  // e.target.insert.value  = " ";
// todoTask.dispatchEvent(new CustomEvent("itemsUpdated"));
// // displayTasks();
// // saveItemsIntoLocalStorage()
// }
//   function addHtmlForListItem(taskLists){
//        if(Array.isArray(taskLists)){
//        console.log() taskLists ?.map(item=>
//             `<li>
//                <input type="checkbox" />
//                <span>${item.task}</span>
//                <button>&times;</button>
//                </li>`
//             ).join(" ") }
//             else{

//            console.log() ""
//         }

//        }

// function displayTasks(){
//    const html = addHtmlForListItem(taskLists);
//     todoTask.innerHTML = html;

// }

// function saveItemsIntoLocalStorage(){
//     localStorage.setItem('task',JSON.stringify(taskLists));
// }
// function displayItemsFromLocalStorage(){

//    const tasksFromLs = JSON.parse(localStorage.getItem('task'));

//   const html = addHtmlForListItem(tasksFromLs);
//    todoTask.innerHTML= html;
// }
// displayItemsFromLocalStorage()
// todoForm.addEventListener('submit', handleSubmit);
// todoTask.addEventListener('itemsUpdated',displayTasks);

// const names = ['shakib','shahadat','shuvo','shakil'];

// const newName = names.map(name=>{
//   console.log() name.toUpperCase();
// })

// console.log(newName)

// function getArguments(firstName, lastName) {
//   console.log(arguments);
//   let fullName = "";
//   for (let i = 0; i < arguments.length; i++) {
//     const namePart = arguments[i];

//     fullName = fullName + " " + namePart;
//   }
//  console.log() fullName;
// }

// const name = getArguments("kabir", "khan");
// console.log(name);

//immidietely invoking function expression//

// (function () {
//   const abckd = "Ami allahor rohomote valo achi";
//   console.log(abckd);
// })();

// function add(num1, num2 = 30) {
//   return num1 + num2;
// }

// const total = add(20);
// console.log(total);

// const firstName = "justin";
// const lastName = "timbarlake";

// const fullName = firstName + " " + lastName + "is an american singer";

// const multiLine =
//   "'amaro porano jaha chai' + 'tumi tay go' + 'dur hote ami tare sadhibo'";
// const multiLine2 = `${fullName} + ${firstName} +amaro porano jaha chai,tumi tay .
// dur hote ami tare sadhibo ,
// mayabono biharini,
//  kichu ki chilon  bolar
//  kichu dhore rakhbar`;
// console.log(multiLine2);

// const ages = [34, 53, 12, 36];
// const ages2 = [32, 12, 53, 52];

// const allages = [...ages, ...ages2, 5];
// console.log(allages);

// const business = 534;
// const minister = 343;
// const secretary = 974;
// const takapoisha = [534, 343, 974, 3, 20390];
// const borolok = Math.max(...takapoisha);
// console.log(borolok);

// class Car {
//   constructor(name, year, color) {
//     this.name = name;
//     this.year = year;
//     this.color = color;
//   }
//   ride(status) {
//     console.log(`${this.name},${this.year},${this.color} is very ${status}`);
//   }
// }

// const car1 = new Car("Toyota", 2022, "red");
// const car2 = new Car("Lexus", 2010, "black");

// car1.ride("bad");
// car2.ride("good");
// class Parent {
//   constructor() {
//     this.fatherName = "Hefzur Rahman";
//   }
// }
// class Child extends Parent {
//   constructor(name, age) {
//     super();
//     this.name = name;
//     this.age = age;
//   }
//   sons(status) {
//     console.log(
//       `Hafez Mawlana ${this.fatherName} has three sons.${this.name}(${this.age}) . ${this.name} ${status}`
//     );
//   }
// }

// const elderChild = new Child("Elder is Hammadur Rahman", 26);

// const middleChild = new Child("Middle is Sazzadur Rahman", 22);
// const smallChild = new Child("Small is Hasibur Rahman", 16);

// elderChild.sons("is very briliant");
// middleChild.sons("is very  intelligent ");
// smallChild.sons("is very talented");
// const person = {
//   name: "Sazzadur Rahman",
//   age: 22,
//   friends: ["Riyad,Owhab,Nobel"],
//   phone: "01732791906",
//   info: {
//     address: "Azimpur",
//     job: "Software engineer",
//   },
// };

// const { phone, name, info } = person;

// console.log(phone, name, info.address);

// const friends = [
//   "Khandaker Abdullah Jahangir",
//   "shykh Ahmadullah",
//   "Mizanur Rahman Azhari",
// ];

// const [first, ...obj] = friends;

// console.log(first, obj);

// const name = "Hemayet uddin";

// if (name.length > 0) {
//   console.log("the condition is true");
// } else {
//   console.log("the condition is false");
// }

// const numbers = [2, 4, 6, 7, 8];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   const result = element * element;

//   output.push(result);
// }
// console.log(output);

// const numbers = [2, 4, 6, 7, 8, 13, 23];

// const result = numbers.filter((x) => x > 6);
// console.log(result);

// const students = [
//   { id: 23, name: "Siddikur Rahman" },
//   { id: 22, name: "shykh Ahmadullah" },
//   { id: 32, name: "Delwar Hossain sayeedi" },
//   { id: 12, name: " Dr. khandakar Abdullah jahangir" },
//   { id: 93, name: "Mizanur Rahman Azhari" },
// ];

// const output = students.map((sName) => sName.name);
// const adult = students.filter((sid) => sid.id > 30);
// const find = students.find((sid) => sid.id > 30);
// console.log(adult);

// function stopWatch() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// const clock1 = stopWatch();
// console.log(clock1());
// console.log(clock1());
// console.log(clock1());
// console.log(clock1());

// const clock2 = stopWatch();
// console.log(clock2());
// console.log(clock2());
// console.log(clock1());
// console.log(clock1());
// console.log(clock2());

// class Crush {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   firstLove(status) {
//     console.log(
//       ` ${this.name}(${this.age}) ${status}. But the sad thing is she is married now`
//     );
//   }
// }
// const crushName1 = new Crush("Nowshin Taiyara prova", 21);
// const crushName2 = new Crush("Hamida Sultana Omi", 22);

// crushName1.firstLove(
//   "was a angry girl. she is my first love. she had a wonderful personality"
// );
// crushName2.firstLove(
//   "was a beautiful girl. she is my second love.she was a big-hearted girl"
// );

// const nums = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// const part = nums.slice(1, 16);
// console.log(part);

// const nums = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// const part = nums.splice(2, 16, 2999, 232324);
// console.log(part);
// console.log(nums);

// const together = nums.join(",");
// console.log(together);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] > 6) {
//     break;
//   }
//   console.log(nums[i]);
// }

// const user = {
//   id: 23,
//   name: "masud",
//   friends: ["kamal", "jamal", "tamal"],
//   lovers: {
//     first: "govt. college student",
//     second: "govt. girls college student",
//   },
// };

// const userJSON = JSON.stringify(user);
// console.log(userJSON);

// const userFromJson = JSON.parse(userJSON);
// console.log(userFromJson);

//how to manage a post from json//

// const postInfo = { title: "foooooo", body: "barrrr", userId: 1 };

// document.getElementById("submit").addEventListener("click", function () {
//   const title = document.getElementById("title").value;
//   const bodyContent = document.getElementById("bodycontrol").value;
//   const post = { title: title, body: bodyContent };
//   nowPostToServer(post);
// });

// function nowPostToServer(postInfo) {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(postInfo),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

document.getElementById("submit").addEventListener("click", function () {
  const title = document.getElementById("title").value;
  const bodycontent = document.getElementById("bodycontent").value;
  const post = { title: title, body: bodycontent };
  nowPostToServer(post);
});

function nowPostToServer(postInfo) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(postInfo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
