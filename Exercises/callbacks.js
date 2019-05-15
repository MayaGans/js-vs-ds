// Side Effects With forEach

const vars = [1,2,3]

const doubleInPlace = (input) => {
  input.forEach(function(value, location, array) {
    array[location] = value * 2; //wrap this in console.log to confirm answer
  });
}

doubleInPlace(vars)

// Annotating Data
// Given an array of objects representing observations of wild animals:

data = [
  {'date': '1977-7-16', 'sex': 'M', 'species': 'NL'},
  {'date': '1977-7-16', 'sex': 'M', 'species': 'NL'},
  {'date': '1977-7-16', 'sex': 'F', 'species': 'DM'},
  {'date': '1977-7-16', 'sex': 'M', 'species': 'DM'},
  {'date': '1977-7-16', 'sex': 'M', 'species': 'DM'},
  {'date': '1977-7-16', 'sex': 'M', 'species': 'PF'},
  {'date': '1977-7-16', 'sex': 'F', 'species': 'PE'},
  {'date': '1977-7-16', 'sex': 'M', 'species': 'DM'}
]

// set the first ID for the sequence to 1
var currentID = 1

// create an intermediate dataframe with the proper object:key pairs
var intermediate = data.map(function (obj) {
   return {
   
        // add 1 to the currentID as we iterate through each object
   		seq: currentID++,
   		
   		//rename the object year and remove all data after the first - 
        year: obj.date.split('-')[0],
        
        // keep sex same
        sex: obj.sex,
        
        // keep species same
        species: obj.species
    };
});

// now we can filter for only females
const newData = intermediate
               .filter((x) => { return x.sex === 'F' })
            
// done!
console.log(newData)