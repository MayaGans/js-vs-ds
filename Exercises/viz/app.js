const vegaEmbed = require('vega-embed').default

 let spec = {
  // identifies the version of the spec being used (as a URL).
      "$schema": "https://vega.github.io/schema/vega-lite/v2.0.json",
  // is a comment to remind us what we thought we were doing when we created this
      "description": "Binned Scatter Plot",
  // input data
      "title": {"text": "Binned Scatter Plot", "fontSize": 20},
      "width": 150,
  	  "height": 200,
      "data": {
        "values": [
          {"a": "P", "b": 19},
          {"a": "P", "b": 28},
          {"a": "P", "b": 91},
          {"a": "Q", "b": 55},
          {"a": "Q", "b": 81},
          {"a": "Q", "b": 87},
          {"a": "R", "b": 43},
          {"a": "R", "b": 52},
          {"a": "R", "b": 53}
        ]
      },
      "mark": "circle",
      "encoding": {
        "x": {"field": "a", "type": "ordinal"},
        "y": {"field": "b", "type": "quantitative", "aggregate": "average"},
        "size": {"aggregate": "average", "type": "quantitative"},
      }
    }
     let options = {
      "actions": {
        "export": false,
        "source": false,
        "editor": false
      }
    }
    
vegaEmbed("#BinnedScatter", spec, options)

/////////////////////// SECOND GRAPH ///////////////////////////

 let spec2 = {
  // identifies the version of the spec being used (as a URL).
      "$schema": "https://vega.github.io/schema/vega-lite/v2.0.json",
  // is a comment to remind us what we thought we were doing when we created this
      "description": "Grouped Bar Chart",
      "title": {"text": "Grouped Bar Chart", "fontSize": 20},
      "width": 150,
  	  "height": 120,
  // input data
      "data": {
        "values": [
          {"a": "P", "b": 19, "c": 1},
          {"a": "P", "b": 28, "c": 2},
          {"a": "P", "b": 91, "c": 3},
          {"a": "Q", "b": 55, "c": 1},
          {"a": "Q", "b": 81, "c": 2},
          {"a": "Q", "b": 87, "c": 3},
          {"a": "R", "b": 43, "c": 1},
          {"a": "R", "b": 52, "c": 2},
          {"a": "R", "b": 53, "c": 3}
        ]
      },
      "mark": "bar",
      "encoding": {
      	"column": {"field": "c", "type": "nominal"},
        "x": {"field": "a", "type": "nominal"},
        "y": {"field": "b", "type": "quantitative"},
        "color": {
        	"field": "a", "type": "nominal",
        	"scale": {"range": ["#D31000", "#FFC500", "#0077CA"]}
        	}
      }
    }
    
vegaEmbed("#GroupedBarCharts", spec2, options)

/////////////////// D3 ///////////////////////

var data = [];

for (var i = 0; i < 1000; i++) {
	var newNumber = Math.floor(Math.random() * 100);
		data.push(newNumber);
	}
	
let spec3 = {
  // identifies the version of the spec being used (as a URL).
      "$schema": "https://vega.github.io/schema/vega-lite/v2.0.json",
  // is a comment to remind us what we thought we were doing when we created this
      "description": "Histogram",
      "title": {"text": "Histogram", "fontSize": 20},
      "width": 150,
  	  "height": 120,
  // input data
      "data": {
        "values": data
      },
      "mark": "bar",
      "encoding": {
   		 "x": {
      		"bin": true,
      		"field": "data",
      		"type": "quantitative"
    	 },
    "y": {
      "aggregate": "count",
      "type": "quantitative"
    }
      }
    }
    
vegaEmbed("#d3", spec3, options)


document.getElementById('d3Fun').innerHTML = "Mean: " + Math.round(d3.mean(data)) + " " +
				"Deviation: " + Math.round(d3.deviation(data), 2) + " " +
				"Quartiles: " + 
				d3.quantile(data, 0.25) + " " +
				d3.quantile(data, 0.5) + " " +
				d3.quantile(data, 0.75)


    
    
