const note = document.getElementById('note');
const btnSave = document.querySelector('.btn-save');

btnSave.addEventListener('click', (e) => {
    const valueNote = note.value;
    const savedNotes = localStorage.getItem('notes');

    if (savedNotes){
        const noteArray = [valueNote]
        localStorage.setItem('notes', JSON.stringify(noteArray));
        console.log(noteArray);
    }
});





