// example entry from data.js
// -------------------------- //

// var data = [{
//     datetime: "1/1/2010",
//     city: "benton",
//     state: "ar",
//     country: "us",
//     shape: "circle",
//     durationMinutes: "5 mins.",
//     comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
//   },

// identify and name data...
var tableData = data;
// select where to perform functions in html code
var tbody = d3.select("tbody")

// create table function
// ---------------------- //

function createTable(data) {

    // clear any existing table data
    tbody.html("")

    // create table from on ufo data entries
    data.forEach((tableData) => {
        var row = tbody.append("tr");
        Object.entries(tableData).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}

// event function
// ---------------------- //

function onClick() {

    // prevent event refreshing
    d3.event.preventDefault()    
    // select the html property input id value. 
    var date = d3.select("#datetime").property("value");

    // on click, filtered data by input equals the tableData
    var filtered_tableData = tableData;

    // if a date was entered keep only the rows...
    // ... that match the entered date
    if (date) {
        filtered_tableData = filtered_tableData.filter((row) => row.datetime === date);
    }
    // else prompt user to input a new date
    else {
        var date_statement = "Please enter a new date."
        return console.log(date_statement);
    }
    // create the table with the filtered data
    createTable(filtered_tableData);
}

// on button click perform the functions
// ------------------------------------ //

d3.selectAll("#filter-btn").on("click", onClick);
createTable(tableData);