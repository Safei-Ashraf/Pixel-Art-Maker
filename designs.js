// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let height, width;

const formInput = document.querySelector('#sizePicker');

formInput.addEventListener('submit',function(e)
{    //PREVENT Default Behaviour on SUBMIT FORM.
    e.preventDefault();
    //STORE height and width Values from FORM INPUT.
    height = document.querySelector('#inputHeight').value;
    width = document.querySelector('#inputWidth').value;
    //CALLING makeGrid function to build Grid once  Input Added.
    makeGrid(height,width);
});

//RESET Grid on New Submission;
function resetGrid(table)
{
    table.innerHTML = '';
};

function makeGrid(h,w)
 {
    // Your code goes here!
    let table = document.querySelector('#pixelCanvas');
    resetGrid(table);
    for(let i = 0; i <=h; ++i)
    {
        let tableRow = document.createElement('tr');
        for(let j = 1; j <= w; ++j) 
        {
            let tableData = document.createElement('td');
       
        //ONCLICK Change Color:
        tableData.addEventListener('click',function()
        {
            this.style.backgroundColor  = document.querySelector('#colorPicker').value;
        });

             tableRow.appendChild(tableData);
         }
        table.appendChild(tableRow);
    }
};
