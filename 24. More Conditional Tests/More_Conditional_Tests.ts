
//Equality and Inequality Test 1
console.log("Equality test with strings: ", "Apple" === "Apple");
//Equality and Inequality Test 2
console.log("Inequality test with strings: ", ("Apple" as string) != "Orange");

// Tests using the lower case function
console.log("Lower case function test: " , "HELLO".toLowerCase() === "hello");

//Numerical test involving equality
console.log("Equality test with numbers: ", 26 === 26);
//Numerical test involving inequality 
console.log("Inequality test with numbers: ", (26 as number) != 35);

//greater than test
console.log("Greater than test: ", 10 > 5);
//less than test
console.log("Less than test: ", 5 < 10);

// greater than or equal to 
console.log("Greater than and equal to test: ", 10 >= 10);
// less than or equal to
console.log("Less than or equal to test: ", 5 <= 10);

//Test using "and" operator
console.log("And operator test: ", 5===5 && 10 > 5);
//Test using "or" operator
console.log("Or operator test: ", 5===5 || false);

//Test whether an item is in array
const fruits :string[] = ['Apricot', 'Banana', 'Guava'];
console.log('Test "Apricot" in the array: ', fruits.includes("Apricot"));
//Test whether an item is not in an array
console.log('Testing "Apple" is not in array: ', !fruits.includes('Apple'));



