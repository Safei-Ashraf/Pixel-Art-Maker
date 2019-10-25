// Select color input
// Select size input
let color, height, width;

const formInput = document.getElementById('sizePicker');

formInput.addEventListener('submit', function (event){
  event.preventDefault();
  height= document.getElementById('inputHeight').value;
  width= document.getElementById('inputWidth').value;
 // TEST Input Is Recorded Correctly To Variables:
 // console.log(`Height is ${height} and width is ${width}`);

// When size is submitted by the user, call makeGrid()
  makeGrid(height,width);
});

color = document.getElementById('colorPicker').value;
//RESET Grid On New Selection
function resetGrid(table){
 table.innerHTML="";
}
 // NAKE Grid Upon Selecting Height and Width
function makeGrid(h,w) 
{
  //REMOVE All Table Cells
  let table = document.getElementById('pixelCanvas');
  resetGrid(table);
  for(let i = 1; i <= h ;i++)
  {
    let tableRow = document.createElement('tr');
    for(let j = 1; j <= w; j++)
    {
      let cellId = i+'-'+j;
      let tableData = document.createElement('td');
      tableData.setAttribute('id',cellId);
      let colorPicker = document.getElementById('colorPicker');

      tableData.addEventListener('click', function()
      {
        this.style.backgroundColor =  document.getElementById('colorPicker').value;
      });
      tableRow.appendChild(tableData);
    }
    table.appendChild(tableRow);
  }
};
