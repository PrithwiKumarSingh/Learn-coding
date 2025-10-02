// let score = "33";
// console.log(typeof (score));

// let valueIntNumber = Number(score);
// console.log(typeof valueIntNumber);

// let isLoggedIn = Boolean(score);
// console.log(typeof isLoggedIn);

// let str1 = "Prithwi";
// let str2 = "Singh";
// let str3 = str1 + str2;
// console.log(str3);

// let num1 = ("1" + 1); // 11
// let num2 = (1 + "2"); 
// let num3 = ("1" + 1 + 2);
// let num4 = (1+2+"3");
// console.table([num1, num2, num3, num4]);
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);

// let game = 100;
// // game++;
// // ++game;
// console.log(++game);

// console.log(3>1);

// console.log("2" > 5);
// console.log(null > 0);  //false
// console.log(null == 0);  //false
// console.log(null >= 0);  //true


// let a3 = 0;
// console.log(typeof a3);

// let a4 = undefined;
// console.log(Number(a4));

// let age = 18;
// let money = 420;
// console.log(age<=18 && money>200);
// console.log(age<=18 || money>500);


// const a = [1,2,3];
// a.push(5);
// const b = [...a, 4];
// console.log(a);
// console.log(b);

// const id = Symbol('123');
// const anotherId = Symbol('123');

// console.log(id == anotherId);
// console.log(typeof id);

// const myObj = {
//     name : "Prithwi",
//     city : "Motihari",
//     pincode : 845401
// }

// myObj.city = "Dehradun";
// console.log(myObj.city);
// let obj = myObj;
// console.log(obj.name);

// const sum = (a,b)=>{
//     return a + b;
// }
// console.log(sum(3,5));


// let s1 = "Hello ";
// let s2 = "Prithwi Singh";
// let s3 = s1+s2;
// console.log(s3.length);

// let hero = "Hello Prithwi Singh";
// console.log(hero.indexOf("Prithwi")); //6
// console.log(hero.indexOf("prithwi"));  //-1
// console.log(hero.lastIndexOf("Prithwi"));  //6
// console.log(hero.includes("prithwi")); //false


// let num = 231;
// console.log(num.toExponential(2))
// console.log(typeof num.toExponential(2))
// console.log(num.toFixed(2));
// console.log(num.toPrecision(2))

function greetd(Name = "Guest"){
    return `${Name} Kaise Hai aap`
}

console.log(greetd("Prithwi"))