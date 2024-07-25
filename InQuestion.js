

// let a;
// let b;
// for(a=1;a<=5;a++)
// {
//   var blank="*";
//   for(b=1;b<
//     5;b++)
// {
//     blank=blank+" "+"*";
// }
// console.log(blank)
// }

// var a= {},
// b={key:'b'},
// c={key:'c'};

// a[b]=123;
// a[c]=456;

// console.log(a[b])

// var txt ="My name is ankit"
// console.log(txt.split(" "))

// var data = "1 2 3 4 5 6"

// console.log(data.split(' '))

// const arry =["ankit","karan","tanu"]

// console.log(arry[1])



// const arr1 =["hello" ,"hy","hi",5]

// const arr2=["karan","ankit ","pankaj"]


// const arr3=[...arr1,...arr2,"aar3"]

// console.log(arr3)

// hoistedVariable = 3;
// console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
// var hoistedVariable;

// const NaN=("Hello")  // Returns true
// isNaN(345)   // Returns false
// isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
// isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
// isNaN(false) // Returns false
// isNaN(undefined)

// function higherOrder(fn) {
//     fn();
//   }
     
//   higherOrder(function() { console.log("Hello world") });  


// var obj1 = {
//     address : "Mumbai,India",
//     getAddress: function(){
//     console.log(this.address); 
//   }
// }
   
// var getAddress = obj1.getAddress;
// var obj2 = {name:"akshay"};
// console.log(getAddress());    


// function sumoftwonum(num1,num2)
// {
//   return num1+num2
// }
// console.log(sumoftwonum(10,20))

// const arry=[1,2,3,4,5,6,7,8]

// function maxnum()
// {
//   return Math.max(...arry)
// }

// console.log(maxnum())

// function prime(num)
// {
//   if (num%2==0){
//   console.log( "prime")}
//   else{
//   console.log( "numberi is not prime")}
// }
// prime(2)  


//   map function

//  const arr =[[12,"hello"],23,56]
//   arr.map((data)=>{
//     console.log(data)
//   })


//   arry filter method

// const arrynum =[56,3,67,8,9,45,7,88]

// let arrynew = arrynum.filter((num)=>{
//     return num<10 
// })


// reduce method in arry


//  const arry = [1,2,3,4,5,6,7,8,9,"ankit",true,false]
  
// arry.forEach((data)=>{
//     console.log( data)
//  })
//  hello ="Ankit"
//  console.log(true == "1")

//  console.log(1+2+3+"4")
 


// const namedata =[ 'ankit','karan']

// const updatename = namedata.map ((namel)=>{
//    if (namel === "ankit"){
//     return namel.charAt(0).toUpperCase()+namel.slice(1)
//    }
//    return namel
// })
// console.log(updatename)


// console.log([45,100] > [41])
// console.log([3] > [2]);

// for(var i =0;i<3 ;i++){
//    setTimeout(()=>{
//    console.log(i)
//    },100)

// }

// const h1 = {h1:"ankit", i:"thakur"}

// const h2 = {h1:"ankit", i:"thakur"}

// const h3 = h2 ;
// console.log(h1)
// console.log( h2)


// console.log(4+"4")
// console.log( "10")

//::::::::::::::::: Promise

// console.log("hello from 1")



//     var promise = new Promise (function(resolve ,reject)
//     {
//     setTimeout(function(){
//         resolve(425)
//         // reject (new Error("Bhai kay kar rha tu error aa gya"))
//     },4500)
//     })
//     console.log(promise)
//     //.then ::::::::::::::
//     promise.then(value=>{
//      alert(" your request if submit")
//     })
//    // .catch :::::::::::::
//    promise.catch(Error=>{
//     alert("Sorry")
//    })
// console.log("hello from 3")


// let promise = new Promise (function(resolve ,reject)
// {
//   resolve(255)   
// },2000)

// console.log(promise)
// console.log("after promise")


//  alert prompt confirm ::::::::::::;::::::::::::::::::::::;

// let arry1 = [1,2,3,4]

// let arry2 =[5,6,7,8]

// // console.log(arry1.concat(arry2))
// let arry3 = arry1.concat(arry2)

// console.log(arry3)
// console.log(arry1)

// let arr1 =["a","b","c"]
// let arr2 =["d","e","f"]

// let arr3 =[...arr1,...arr2]
// console.log(arr3)
// console.log(arr1)

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::: ARRAY METHOD::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Basic Array Methods
// Array length
// Array toString()
// Array at()
// Array join()
// Array pop()
// Array push()
// See Also:
// Search Methods
// Sort Methods
// Iteration Methods	Array shift()
// Array unshift()
// Array delete()
// Array concat()
// Array copyWithin()
// Array flat()
// Array splice()
// Array toSpliced()
// Array slice()


//1... JavaScript Array length
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;
// console.log(size)

// 2... JavaScript Array toString()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();

// 3... JavaScript Array at()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);
// console.log(fruit)

// 4... JavaScript Array join()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.join("12");

// 5... JavaScript Array pop()
// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// console.log(fruits.pop()) //remove the last data of arry 

// 6... JavaScript Array push()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.push("add"),fruits)

// 7... JavaScript Array shift()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.shift(),fruits) //The shift() method removes the first array element and "shifts" all other elements to a lower index.

// 8... JavaScript Array unshift()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.unshift("Lemon"),fruits)  //The unshift() method adds a new element to an array (at the beginning)
  
        // :::::::::::::::Changing Elements::::::::::::::::::: //

// 9... JavaScript Array length
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.length)

//  a=12;
//  b="4"
//  console.log(typeof(a))
//  console.log(a+b)