//array

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
console.log(myarray);

