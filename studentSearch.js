
var rows = document.getElementById('studentTableAll').getElementsByTagName('tr');

function serviceSelect () {
  var serviceSelected = document.getElementById('serviceSelector').value;
//Change the class of all rows in the table to hidden 
  for (i=0; i < rows.length; i++){
    var currentRow = rows[i];
    currentRow.removeAttribute("class");

    if (serviceSelected == "Show All") {
      currentRow.classList.add("shown");
    } else if (currentRow.children[3].innerHTML.includes(serviceSelected)){
      currentRow.classList.add("shown");
    } else {
      currentRow.classList.add("hidden");
    }
  };


