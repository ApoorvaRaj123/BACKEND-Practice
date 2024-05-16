// Fundamentals of JavaScript for Backend Development
// arrays and objects
// functions return
// async JavaScript
// foreach map filter find indexOf

var arr = [1,2,3,4,5,6,7,8,9,10];

let ans = arr.find((val)=>{
    if (val == 10) return val;
})

console .log(ans);


// indexOf

console.log(arr.indexOf(10))

//objects

let obj = {
    name : "johndoe",
    age : 28,
    Profession : "Soft. Developer"
}