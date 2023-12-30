// INVENTORY PAGE
// Use the plus and minus buttons to tick numbers in the quantity column.
// Use the "Reset Button" button at the bottom to bring all numbers in the Quantity column to zero.
let plusButtons = document.querySelectorAll('#plus');
let minusBtn = document.getElementById('minus');
let tableBody = document.getElementById('tableBody');
let quants = tableBody.querySelectorAll('td:nth-child(4n)');


for(i of plusButtons) {
    i.addEventListener('click', function() {
        console.log(this);
        console.log(this.innerHTML);
        console.log(quants);
    });
};



function resetList() {
    for(let i = 0; i < 24; i++) {
        quants[i].innerHTML = 0;
    };
};

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