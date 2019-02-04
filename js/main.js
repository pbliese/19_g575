//javascript
//Madison 255214
//St. Louis 308626
//Kirksville 17536
//Estes Park 6339
//Fort Collins 165080

//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations, added city & population
function cities(){
    //define two arrays for cities and population
    var cityPop = [
        { 
            city: 'Madison',
            population: 255214
        },
        {
            city: 'St. Louis',
            population: 308626
        },
        {
            city: 'Kirksville',
            population: 17536
        },
        {
            city: 'Estes Park',
            population: 6339
        },
	{
	    city: 'Fort Collins',
	    population: 165080
	}
    ];

    //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city, should account for additional city due to using cityPop.length
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
};

//call the initialize function when the document has loaded
$(document).ready(initialize);
