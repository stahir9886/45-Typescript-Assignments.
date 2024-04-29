//Write a program that creates Objects containing these items.

//Datatype of person object
interface person {
    age : number,
    name: string,
    nationality: string,
    student: boolean
}
//Person object
let person :person = {
    age : 29 ,
    name : 'Tahir' ,
    nationality : 'Pakistan' ,
    student : true
}
// Print Person
console.log(person);

//Datatype of Car object
interface car {
    maker: string,
    color: string,
    automatic: boolean
}
//Car object
let car = {
    maker : 'Toyota',
    color : 'Black',
    automatic : true 
}

// Print Car
console.log(car);