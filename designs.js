// When size is submitted by the user, call makeGrid()

//Javascript code used to select color input
function changeColor() {
    const color = document.getElementById("colorPicker").value;
    this.style.background = color;
}


//Javascript code used to select and apply color to the cell of the canvas.
function makeGrid() {
    const gridHeight = document.getElementById("input_height").value;
    const gridWidth = document.getElementById("input_width").value;
    const pixelCanvas = document.getElementById("pixel_canvas"); 
    pixelCanvas.innerText=""; // this is an empty table

//Javascript code to select and create size input of table and each cell contains onclick event handler that calls the changeColor() function.
    for (let c=0; c<gridHeight; ++c) {
        const row = pixelCanvas.insertRow(-1); // insert new row at the last position
        for (let r=0; r<gridWidth; ++r) {
            const column = row.insertCell(-1); //insert new column at the last position
            column.onclick = changeColor;
        }
    }
    event.preventDefault(); //Javascript code that ensures the behaviour stays without going to default after the event.
}

//Javascript code to alert the coder and contributors to this code
function credits() {
    alert("Please take out time to appreciate the coder, ITANG, SAMUEL ITANG with the help of mentors and other scholars at Udacity");
}
