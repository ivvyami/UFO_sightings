// from data.js
var tableData = data;

//Select the button
var button = d3.select('#filter-btn');

button.on("click", function() {

    // Select input element and get the raw HTML node
    var input = d3.select('#datetime');

    // Get the value property of the input element

    var inputValue = input.property("value"); 

    console.log(inputValue); 
    console.log(tableData);

    // making variable for filtered data based on the inputValue entered

    var filteredData = tableData.filter(tbl => tbl.datetime === inputValue);
    
    // console log the filtered data in the to see what we got!
    console.log(filteredData);

    // these are the filtered values that we want in the table
    var dateTime = filteredData.map(tbl => tbl.datetime);
    var city = filteredData.map(tbl => tbl.city);
    var state = filteredData.map(tbl => tbl.state);
    var country = filteredData.map(tbl => tbl.country);
    var shape = filteredData.map(tbl => tbl.shape);
    var comment = filteredData.map(tbl => tbl.comments);
    

    // select the table body, you'll be using this later
    var tbody = d3.select("tbody");

    filteredData.forEach(ufoSighting => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
       
    
    // // loop through the filtered data and console.log all of it
    // tableData.forEach(function(filteredData) {
    //     console.log(filteredData);

    //     //append one table row 'tr' for each ufo sighting
    //     var row = tbody.append("tr");

    //     // console log each ufo sighting value
    //     Object.entries(filteredData).forEach(function([key,value]) {
    //         console.log(key, value);
    //         //use d3 to append 1 cell per ufo sighting value (datetime, city, state
    //         // country, shape, comment)
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });

    // });
});

