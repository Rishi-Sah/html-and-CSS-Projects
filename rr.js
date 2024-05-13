// // 
// let score=prompt("Enter The Score of the student ");
// let grade;
// if(score>=90 && score<=100){
//     grade="A";
// }
// else if(score>=70 && score<=89){
//     grade="B";
// }
// else if(score>=60 && score<=69){
//     grade="C";
// }
// else if(score>=50 && score<=59){
//     grade="D";
// }
// else if(score>=0 && score<=49){
//     grade="F";
// }else{
//     console.log("Error!!");
// }
// console.log(score,"is in ",grade,"Grade");
//sum of all natural numbers
// let n=prompt("Enter number");
// let sum=0;
// for(let i=1;i<=n;i++){
//     sum +=i;
// }
// console.log("Sum of given",n,"is = ",sum);
// for(let i=0;i<=100;i++){
//     console.log(i);
// }
// let i=0;
// while(i<=100){
//     console.log(i);
//     i++
// }
// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=100);

// for(let i=0;i<=100;i++){
    
//     if(i%2 !==0){
//         console.log(i);


//     }
// }
// let n=5;
// for(let i=prompt("Enter number");i !=n;i++){
//     if(i===n){
//         console.log("match found");
//     }else{

//     }
// }
// let gamen=5;
// let usern=prompt("Entar any number:");
// while(usern == gamen){
//     usern=prompt("You entered wrong number ! Please Guess Again:")

// }
// console.log("Congratulations you Guess Right number::");
// let sale = {
//     name : "pen",
//     price : 10,
// };

// let str=`The price of the pen is ${sale.price} Rupees.`
// console.log(str);
// let uname=prompt("Enter your Name:");
// let user_name =  uname + "123" + uname.length +"@gmail.com";
// console.log(user_name," ::is the UserName for the given Name of the User.");
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i< marks.length;i++){
//     sum= sum+marks[i];

// }
// let avg=sum/marks.length;
// console.log(avg,"IS the average marks of the given class: ");

// let price=[250,645,300,900,50];
// let i;
// for( i=0;i<price.length;i++){
//     let offer=price[i]/10;
//     price[i]=price[i]-offer;
    
// }
// console.log(price);


// let companies=["Bloomberg","Microsoft","Uber","Goolgle","IBM","Netflix"];
// companies.push("amazone");


// console.log(companies);
// function vowelcount (str)
// {

//    let count=0;
//    let vowel=["a","e","i","o","u"];
//    for(let i=0;i<str.length;i++){
//     if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o"||str[i]==="u"){
//         count=count+1;
    
//        }
       
  
//    }
  
//    return count;
// }



// let num=[1,2,3,4,5];
// num.forEach((val)=>{
//     val **=2;
//     console.log(val);
// })

// let marks=[90,91,50,40,85,99,100];
// let ninetyplus = marks.filter((val)=>{
//     return val>90;
// });
// console.log(ninetyplus);

// n=prompt("Enter number");
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
   
// }

// console.log(arr);
// let sum=arr.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console.log(sum,"sum of all number");
// let mul=arr.reduce((prev,curr)=>{
//     return prev*curr;
// })
// console.log(mul,"multiply of all number");
// let append=document.querySelector("div");
// console.dir(append);
// console.log(append);

// chapter-7 practice about DOM MAnipulation /insert
// let btn=document.createElement("button");
// btn.innerText="clickme!";
// btn.style.backgroundColor="red";
// btn.style.color="white";
// let b=document.querySelector("body");
// console.log(b);

// Second Question solution;
// let ne=document.querySelector("p");
// console.log(ne.getAttribute("class"));
// console.log(ne.setAttribute("class","newclass"));
// console.log(ne.getAttribute("class")); 

// practice Question Change or toggle between light mode and dark mode on clicking the mouse.

let Mode=document.querySelector("#mode");
let curmode="light";
let mm=()=>{
    
        if(curmode==="light"){
            curmode="dark";
            console.log(curmode);
            document.querySelector("body").style.backgroundColor="black";
}else{
    curmode="light"
    console.log(curmode);
    document.querySelector("body").style.backgroundColor="white";
}}
Mode.addEventListener("click",mm);
