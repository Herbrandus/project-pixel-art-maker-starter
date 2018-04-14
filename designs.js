/*  ========================================================================
 *  =====================  Pixel Art Maker 2018!!!  ========================
 *  ===================== written by Gerben Boersma ========================
 *  ========================================================================
 */ 

// Select color input
let inputColor = document.getElementById('colorPicker');

// Select size input 
const inputWidth = document.getElementById('inputWidth');
const inputHeight = document.getElementById('inputHeight');

// Select canvas table
const canvas = document.getElementById('pixelCanvas');

// Select form
const form = document.getElementById('sizePicker');


// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', function(event){
	event.preventDefault();

	makeGrid();

	return false;
});


// When clicked somewhere in the canvas element, make sure
// its target is TD, then perform the coloring actions.
// This way, we only need one event listener
canvas.addEventListener('click', function(event){

	if (event.target.tagName === 'TD') {

		// if the targetted element does not yet have a style tag yet,
		// it must still be empty, so we can give it a color
		if (!event.target.hasAttribute('style')) {

			event.target.style.backgroundColor = inputColor.value;
			// add an extra attribute to check for different colors later on
			event.target.setAttribute('chosen-color', inputColor.value.toString());

		} else {

			// if it does have a style tag, check the chosen-color attribute
			// to see if the color is the same as the picked color
			if (event.target.getAttribute('chosen-color') === inputColor.value.toString()) {

				// if it is the same, we can handle this as an 'eraser' event
				event.target.removeAttribute('style');
				event.target.removeAttribute('chosen-color');

			} else {

				// if it is not the same, just change the color to the new one
				event.target.style.backgroundColor = inputColor.value;
				event.target.setAttribute('chosen-color', inputColor.value.toString());
			}
		}
	}
});


// function to draw the grid inside the table element
function makeGrid() {

	// temporary variables to store the dimensions in
	let width = inputWidth.value;
	let height = inputHeight.value;

	let gridHtml = '';

	// first loop over the height value
	for (var h=0; h<height; h++) {

		gridHtml += '<tr>';

		// in every row, loop over the width value
		for (var w=0; w<width; w++) {
			
			gridHtml += '<td></td>';
		}

		gridHtml += '</tr>';
	}

	// insert the generated HTML inside the canvas
	canvas.innerHTML = gridHtml;

}