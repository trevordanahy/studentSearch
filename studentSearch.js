
var rows = document.getElementById('studentTableAll').getElementsByTagName('tr');
var studentTableAll = document.getElementById('studentTableAll');
var studentTableFiltered = document.getElementById('studentTableFiltered');



function serviceSelect () {
  var serviceSelected = document.getElementById('serviceSelector').value;

  document.getElementById('filteredBody').innerHTML = '';
//Clean filtered table from previous



//Add corresponding rows to
  for (i=0; i < rows.length; i++){
    var currentRow = rows[i]
    if (currentRow.children[3].innerHTML.includes(serviceSelected)){
      studentTableFiltered.getElementsByTagName('tbody')[0].appendChild(currentRow);
  };
  };

  //Hide studentTableAll
console.log(serviceSelected);
  //Show studentTableFiltered after adding new rows
}
