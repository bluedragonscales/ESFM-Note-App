// INVENTORY PAGE
// Use the plus and minus buttons to tick numbers in the quantity column.
// Use the "Reset Button" button at the bottom to bring all numbers in the Quantity column to zero.
let plusBtn = document.getElementById('plus');
let minusBtn = document.getElementById('minus');



// NOTES PAGE
// The "Add-Note" button will add a new note. A canvas box will pop-up and you can use your finger
// or a mouse to draw/write a note.
// The "Save" button inside the new note pop-up box will add that note to the list of notes.
// The "X" button inside the canvas box will delete that note.

// Variables for referencing the canvas and 2dcanvas context
let canvas, ctx;
// Variables to keep track of the mouse position and left-button status 
let mouseX, mouseY, mouseDown = 0;


// Get the current mouse position relative to the top-left of the canvas
function getMousePos(e) {
    if (!e)
        e = Event;

    if (e.offsetX) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    }
    else if (e.layerX) {
        mouseX = e.layerX;
        mouseY = e.layerY;
    }
};

// Draws a dot at a specific position on the supplied canvas name
// Parameters are: A canvas context, the x position, the y position, the size of the dot
function drawDot(ctx, x, y, radius) {
    // Select a fill style
    ctx.fillStyle = 'black';

    // Draw a filled circle
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.fill();
};


// Clear the canvas context using the canvas width and height
function clearCanvas(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};


// Keep track of the mouse button being pressed and draw a dot at current location
function sketchpad_mouseDown() {
    mouseDown = 1;
    drawDot(ctx, mouseX, mouseY, 2);
};


// Keep track of the mouse button being released
function sketchpad_mouseUp() {
    mouseDown = 0;
};


// Keep track of the mouse position and draw a dot if mouse button is currently pressed
function sketchpad_mouseMove(e) { 
    // Update the mouse co-ordinates when moved
    getMousePos(e);

    // Draw a dot if the mouse button is currently being pressed
    if (mouseDown==1) {
        drawDot(ctx, mouseX, mouseY, 2);
    }
};


// Set-up the canvas and add our event handlers after the page has loaded
function init() {
    // Get the specific canvas element from the HTML document
    canvas = document.getElementById('sketchpad');

    // If the browser supports the canvas tag, get the 2d drawing context for this canvas
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
    }

    // Check that we have a valid context to draw on/with before adding event handlers
    if (ctx) {
        canvas.addEventListener('mousedown', sketchpad_mouseDown);
        canvas.addEventListener('mousemove', sketchpad_mouseMove);
        window.addEventListener('mouseup', sketchpad_mouseUp);
    }
};



// SHELF-LIST PAGE