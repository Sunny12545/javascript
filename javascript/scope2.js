// function one(){
//     const username = "sunny"

//     function two(){
//         const website = "youtube"
//         console.log(username);
        
//     }
//     // console.log(website);
//     two()
// }
// one()

//nested scoping

// if (true){
//     const username = "sachin"
//     if (username === "sachin") {
//         const website = "youtube"
//         console.log(username + website);
//     }
//     console.log(website);
    
// }
// console.log(username);

console.log(addone(5));

function addone(num){
    return num + 1
}
console.log(addone(5))


console.log(addtwo());

const addtwo = function(num) {
    return num + 2
}
console.log(addtwo(5));
