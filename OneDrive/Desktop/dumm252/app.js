// let arr = [1,3,4,5,6]

// const [a,b,c] = arr
// console.log(a,b,c)

// // let arr1 = [1,2,3 ,...arr]
// // console.log(arr1)
// let obj1 = {
//     Name :"ram",
//     id : "123",
//     class : "abc"
// }

// const {a} = obj1


// let n1 = 0;
// let n2 = 1;
// let nextnumber;

// for(let i = 0 ; i<=5; i++){
// nextnumber = n1 + n2;
// n1 = n2;
// n2 = nextnumber;

// 

// function xyz(){
//     var a = 1;
//     console.log(a)
// }
// xyz();

let data = {
    firstName : "vishal",
    lastName : "Kumar"

}
let data1 = {
    firstName : "Ram",
    lastName : "Das"

}

function getName(city){
    console.log(`${this.firstName} ${this.lastName} is from ${city}`)
}

// getName.call(data,"Ranchi")
// getName.call(data1,"Konkam")

// getName.apply(data,["Ranchi"])
// getName.apply(data1,["Konkam"])

const getData = getName.bind(data1,["Konkam"])
getData()


