
    
    const programmers = [
    {
    	firstName: "Toby",
    	lastName: 'Hodges'
    },
    {
    	firstName: "Greg",
    	lastName: "Wilson"
    }
    
    ]
    
	
	
	programmers.forEach((elem) =>
    console.log(`${elem.firstName}` + ` ${elem.lastName}`)
);


      ReactDOM.render(
        <ul>{programmers.forEach((elem) => `${elem.firstName}` + ` ${elem.lastName}`}</ul>,
        document.getElementById('app')
      )