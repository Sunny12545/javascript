//array
/*
const myarray = [0,1,2,3,4,5,6];
console.log(myarray[0]);

//array methods
myarray.push(6)
myarray.pop()
console.log(myarray);

console.log(myarray.includes(8));
console.log(myarray.indexOf(1));
const newarr = myarray.join();
console.log(newarr);


//important methods 
//slice splice
const arr1 = myarray.slice(1,3)
console.log(arr1);
console.log(myarray);

const arr2 = myarray.splice(1,3)
console.log(arr2);
console.log(myarray);*/

// part two arrays

const marvelheros = ["thor","spiderman","ironman"];
const dcheros = ["superman","batman","flash"];

// marvelheros.push(dcheros)

// console.log(marvelheros);
// marvelheros.concat(dcheros);
// console.log(marvelheros)

const allnewheros = [...marvelheros, ...dcheros]
console.log(allnewheros);

const anotherarray = [1,2,3,4,[5,6,7],8,[9,10,[11,12]]];
const realarray = anotherarray.flat(Infinity)
console.log(realarray)