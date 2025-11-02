const mysym = Symbol("key");

const myobj = {
    name : "sunny",
    age : 20,
    email : "sunny123@gmail.com",
    location : "warangal",
    islogged : true,
    lastlogindays : ["monday","friday","saturday"],
    [mysym] : "key",
}

console.log(myobj.name);
console.log(myobj['name']);
console.log(typeof myobj[mysym]);

//changing data in objects 
myobj.email = "sunny125@gmail.com";
console.log(myobj.email)

//combining objects 

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);
console.log(Object.keys(obj4));
console.log(Object.values(obj4));
console.log(Object.entries(obj4));
