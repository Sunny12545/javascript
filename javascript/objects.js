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