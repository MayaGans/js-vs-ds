// What’s Going On?
// I can try to troubleshoot how to make it work but that doesn't get directly to why it doesnt as written


//console.log('starting...')
[500, 1000].forEach(t => {
  console.log(`about to setTimeout for ${t}`)
  setTimeout(() => {console.log(`inside timer handler for ${t}`)}, 0)
})

// A Stay of Execution
// I arrived at the correct answer using brute force
// I'd like to understand better HOW setTimeout 100 is changing the message queue here
const holdingMessage = () => {
    console.log('Waiting...')
  }
  
  const swingAxe = () => {
    setTimeout(() => {
      console.log("This is a sharp Medicine, but it is a Physician for all diseases and miseries.")
      holdingMessage()
      console.log('Finished.')
    }, 100)
    holdingMessage()
  }
  
  swingAxe()

// A Synchronous or Asynchronous?
// findNearestTown(coords)
// grab all the coords as a promise 
// .then return coords > 5000 
// use .catch(outside Brazil)

// calculateRoute(A,B) return all routes as a promise
// .then filter for connections 
// catch routes that don't fit criterion? 

// Handling Exceptions
const checkForBlanks = (inputValue) => {
    return new Promise((resolve, reject) => {
      if (inputValue === '') {
        reject(Error("Blank values are not allowed"))
      } else {
        resolve(inputValue)
      }
    })
  }
  // this returns a promise with the input 
  // checkForBlanks("test") returns a promise object with the value "test"
  
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(Error('Timed out!'))
    }, 1000)
    resolve('')
  }).then(
    output => checkForBlanks(output), error => console.log(error.message)).then(
      checkedOutput => console.log(checkedOutput)).catch(
        error => console.log(error.message))
  
  // because a promise is an object we don't need to assign it to a variable
  // we just use this one on the fly 
  
  // I only know what is returned because I tested the function
  // I'd like to delve into this concept more

// Empty Promises
// Return array
const makePromise = (someInteger) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve(someInteger), someInteger * 1000)
    })
  }
  Promise.all([makePromise(7), makePromise(8), makePromise(2),
               makePromise(6), makePromise(5)]).then(
    numbers => console.log(numbers))

// return 2 - I think the key is in changing Promise.all but need to work on solution

// async, Therefore I Am
