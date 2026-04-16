


// let person = {
//     name: "Ahmed",
//     age: 30,
//     city: "Cairo",
//     hoby: {

//             name: "Programming",
//             years: 5
//     }

// }

// for(key in person){
//     // console.log(key);
//     console.log(person[key]);
// }





// let ism = prompt("What is your name?");
// let age = prompt("What is your age?");

// console.log("your name:" + " " + ism);
// console.log("your age:" + " " + age);
let add = {
    name: prompt("What is your name?"),
    age: prompt("What is your age?"),
    place: prompt("Where do you live?"),
    job: prompt("What is your job?")

}
if(add.age < 18 && add.job === "programmer" && add.place === "uzbekistan"   ){
    console.log("Sorry " + add.name + " qabul qlinmadiz")
}

else{
    console.log("Welcome " + add.name + " qabul qilindingiz");
}

console.log("ur name:" + " " + add.name);
console.log("ur age:" + " " + add.age);
console.log("ur place:" + " " + add.place);
console.log("ur job:" + " " + add.job);
