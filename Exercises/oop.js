// Delays

// Define a class called Delay 
// whose call method always returns 
// the value given in the previous call:

class Delay {
  constructor (initial) {
    this.previous = initial
  }

  call (new_value) {
    const result = this.previous
    this.previous = new_value
    return result
  }
}


const example1 = new Delay('a')
for (let value of ['b', 'c', 'd']) {
  console.log(value, '->', example1.call(value))
}

// Filtering
// Define a class called Filter 
// whose call method returns null if its input
// matches one of the values given to its constructor, 
// or the input as output otherwise:

class Filter {

  // here I've given the constructor 5 arguments corresponding to the vowels
  // is there a way to assign an array to the constructor of unlimited size?
  constructor (v1, v2, v3, v4, v5) {
	this.input = [v1, v2, v3, v4, v5,]
  }
  
  call (value) {
  	if (this.input.includes(value)) {
  		return null
  	} else {
  		return value
  	}
  }

}

const example2 = new Filter('a', 'e', 'i', 'o', 'u')
for (let value of ['a', 'b', 'c', 'd', 'e']) {
  console.log(value, '->', example2.call(value))
}

// Pipelines
// Define a class called Pipeline whose constructor takes one or more objects 
// with a single-parameter call method, and whose own call method passes a value 
// through each of them in turn. If any of the components’ call methods returns null, 
// Pipeline stops immediately and returns null.


// Active Expressions
