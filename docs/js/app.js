// Variables
let button = d3.select("#filter-btn");
let inputField1 = d3.select("#designation_year");
let tbody = d3.select("tbody");
let columns = ["landmark_name", "landmark_address", "designation_year", "start_built_year", "recognize_time", "architect", "landmark_designation_date"]

let populate = (dataInput) => {

  dataInput.forEach(landmarks => {
    let row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(landmarks[column])
    )
  });
}

//Populate table
populate(data);

// Filter by attribute
button.on("click", () => {
  d3.event.preventDefault();
  let inputDate = inputField1.property("value").trim();
  let filterDate = data.filter(data => data.designation_year === inputDate);
  console.log(filterDate)

  // Add filtered sighting to table
  tbody.html("");

  let response = {filterDate}

  if (response.filterDate.length !== 0) {
    populate(filterDate);
  }
    else {
      tbody.append("tr").append("td").text("No results found!"); 
    }
})

