// // function myFunction() 
// // const myVariable = "hello"



// // const addTwoNums = () => {
// //     const num1 = 70
// //     const num2 = 5
// //     return (num1 + num2);
// // }
// // console.log(addTwoNums())

// const multiplyTwoNums = () => { 
// // Declaring a funtion called multiplyTwoNums that takes no input as of now. 
//     const num1 = 16;
//     const num2 = 12;
//     let product = num1 * num2
//     // return product ... return statement ends function execution and specifies a value to be returned to the function caller. 
//     document.getElementById("product").innerHTML = product 
//     console.log(product)
// }
// // console.log(multiplyTwoNums(4,6))

// const disappear = (element) => {
// //Makes the items on screen dissapear.

//     document.getElementById(element.id).style.display = "none"
// }


// // const myDocument = {
// //     addEventListener = () => console.log("Okay, we'll add an Event Listener")
// // }

// const sayHello = () => {
//     window.alert("Hello")
// }

// fetch('https://fakestoreapi.com/products', {
//    method:"POST",
//    body: {}
//  })

// const seperateWord = (word) => {
//     const splitUpWord = word.split("")
//     return splitUpWord
// }
// console.log(seperateWord("baloons"));




// JavaScript


const getText = () => {
    let ourElement = document.getElementById("parrot") 
    console.log(ourElement)
    let text = ourElement.innerHTML
    return text 
}



console.log(getText()) // => "Blue Feathers."


//PRACTICE QUESTIONS

      // Create an array called listOfWords
      const listOfWords = ["Beautiful", "Grand", "Brave", "Powerful"]
      // Create a variable to count the number of clicks
      let clicks = 0

      const addNewElement = () => {

        // Use the document method: .createElement() to create a <p> element
        const newParagraph = document.createElement("p")

        // Use the .createTextNode() method to create a text node with each of the words of the array
        // ON LINE 25 - Replace the "me" to Practice Bracket-Notation and make this function access each element one-at-a-time using the "clicks" as a value for the indexes of the array.
        const newText = document.createTextNode(me[me])

        // Then attach the text node to the new <p> element
        newParagraph.appendChild(newText)

        // Next, hold the value of the <article> element
        const myElement = document.getElementById("text-box")

        // Then add the new <p> element with the new text node inside it to the <article> element
        myElement.appendChild(newParagraph)

        // Each time this function runs add 1 to the value of clicks so we can iterate over the array
        clicks++

        return console.log(clicks)
}



  const getRemoteData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }