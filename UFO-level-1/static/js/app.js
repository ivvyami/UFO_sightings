// from data.js
var tableData = data;

//Select the button
var button = d3.select('#filter-btn');

button.on("click", function() {

    // Select input element and get the raw HTML node
    var input = d3.select('#datetime');

    // Get the value property of the input element

    var inputValue = inputElement.property("value"); 

    console.log(inputValue); 
    console.log(tableData);

    var filteredData = tableData.filter(tbl => tbl.datetime === inputValue);

    console.log(filteredData);

    var dateTime = filteredData.map(tbl => tbl.datetime);
    var city = filteredData.map(tbl => tbl.city);
    var state = filteredData.map(tbl => tbl.state);
    var country = filteredData.map(tbl => tbl.country);
    var shape = filteredData.map(tbl => tbl.shape);
    var comment = filteredData.map(tbl => tbl.comments);

    var tbody = d3.select("tbody");

    tableData.forEach(function(ufoSightings) {
        console.log(ufoSightings);
    });
});

