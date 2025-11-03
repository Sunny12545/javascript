const user = {
    username : "sunny",
    price : 999,

    welcomemsg : function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomemsg()
// user.username = "sachin"
// user.welcomemsg()

function one(){
    let username = "sunny"
    console.log(this.username);
}
one()

const two = function(){
    let username = "sunny"
    console.log(this.username);
}
two()

const three = () =>{
    let username = "sunny"
    console.log(this.username);
}
three()

// const addtwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addtwo(5,6))

const addtwo = (num1,num2) => num1 + num2
console.log(addtwo(5,6))

// const addtwo = (num1,num2) => (num1 + num2)


const addtwo = (num1,num2) => ({username:"sunny"})

