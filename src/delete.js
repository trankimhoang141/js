// function delete Row
const confirmDelRow = (index) => {
  // listener Event when click button Yes
  $("agreeToDel").setAttribute("onclick", `del(${index})`);
};

const del = (index) => {
  const indexRowDel = $(`row${index}`);

  // remove element from Array Data
  indexRowDel.remove();
  personArr.splice(index - 1, 1);

  // creat New Table

  $("tableData").remove();
  const drawTable = createTable(personArr);
  $("drawTable").append(drawTable);

};