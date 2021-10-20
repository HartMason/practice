// function myFunction() 
// const myVariable = "hello"



// const addTwoNums = () => {
//     const num1 = 70
//     const num2 = 5
//     return (num1 + num2);
// }
// console.log(addTwoNums())

const multiplyTwoNums = () => { 
// Declaring a funtion called multiplyTwoNums that takes no input as of now. 
    const num1 = 16;
    const num2 = 12;
    let product = num1 * num2
    // return product ... return statement ends function execution and specifies a value to be returned to the function caller. 
    document.getElementById("product").innerHTML = product 
    console.log(product)
}
// console.log(multiplyTwoNums(4,6))

const disappear = (element) => {
//Makes the items on screen dissapear.

    document.getElementById(element.id).style.display = "none"
}


// const myDocument = {
//     addEventListener = () => console.log("Okay, we'll add an Event Listener")
// }

const sayHello = () => {
    window.alert("Hello")
}