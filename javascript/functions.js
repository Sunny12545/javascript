function calculateCartprice(val1, val2,...num1){  //rest operator also called as spread operator
    return num1
}
console.log(calculateCartprice(200 , 400, 600));


const user = {
    username : "sunny",
    price : 200
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleobject(user)

//handle object using function
handleobject({
    username : "sachin",
    price: 200
})

const newarr = [1,2,3,4]

function returnarr(getarr){
    return getarr[0]
}
// console.log(returnarr(newarr));
console.log(returnarr([200,300,400,500]));

