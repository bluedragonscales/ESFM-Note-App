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
let wholeModal = document.getElementById('wholeModal');
let addNoteBtn = document.getElementById('addNoteBtn');
let saveNoteBtn = document.getElementById('saveNoteBtn');
let deleteNoteBtn = document.getElementById('deleteNoteBtn');


function openModal() {
    wholeModal.style.display = 'block';
    deleteNoteBtn.addEventListener('click', closeModal);
    saveNoteBtn.addEventListener('click', saveNote);
};

function closeModal() {
    wholeModal.style.display = 'none';
};

function saveNote() {

}