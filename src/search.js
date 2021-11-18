const searchPerson = () => {
  const optionSearch = $("optionSearch");
  const textSearchInput = $("textSearchInput");

  let searchValue = optionSearch.value;
  let searchText = textSearchInput.value;

  let personSearch = [];
  if (searchValue === "BMI" && isNaN(searchValue)) {
    personArr.forEach((elemnent) => {
      if (elemnent[searchValue] <= searchText) {
        personSearch.push(elemnent);
      }
    });
  } else {
    personArr.forEach((elemnent) => {
      if (elemnent[searchValue].indexOf(searchText) !== -1) {
        personSearch.push(elemnent);
      }
    });
  }
  console.log(personSearch);

  //reload table
  if (personSearch.length === 0) {
    $("msgSearch").innerHTML =
      '<span class="text-danger">There are no results matching your search</span>';
  } else {
    $("msgSearch").innerHTML = "";
    $("tableData").remove();
    let drawTable = createTable(personSearch);
    $("drawTable").append(drawTable);
  }
};
