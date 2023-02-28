
// Grab the data with d3
d3.csv("../Data/chicago_landmarks.csv").then(function(data) {

// Variables
// let button = d3.select("#filter-btn");
// let inputField1 = d3.select("#designation_year");
// let tbody = d3.select("tbody");
// var resetbtn = d3.select("#reset-btn");
// let columns = ["landmark_name", "id", "landmark_address", "designation_year", "start_built_year", "recognize_time", "architect", "latitude", "longitude", "landmark_designation_date", "location"];



let populate = (dataInput) => {

  dataInput.forEach(landmark => {
    let row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(landmark[column])
    )
  });
}

//Populate table
populate(data);
});

// Filter by attribute
// button.on("click", () => {
//   d3.event.preventDefault();
//   let inputData = inputField1.property("value").trim();
//   let filter = data.filter(data => data.country === inputData);
//   console.log(filterCountry)

//   // Add filtered sighting to table
//   tbody.html("");

//   let response = {filterCountry}

//   if (response.filterCountry.length !== 0) {
//     populate(filterCountry);
//   }
//     else {
//       tbody.append("tr").append("td").text("No results found!"); 
//     }
// });

// resetbtn.on("click", () => {
//     tbody.html("");
//     populate(data);
//     console.log("Table reset");
//   })
// });