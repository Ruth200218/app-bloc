const note = document.querySelector('#note');
const btnSave = document.querySelector('.btn-save');
const saveNote = document.querySelector('.save-note');
const titleNote = document.querySelector('#title-note')

btnSave.addEventListener('click', (e) => {
  const valueTitle = titleNote.value;
  const valueNote = note.value;

  if (valueNote !== '') {
    localStorage.setItem('title', valueTitle);
    localStorage.setItem('note', valueNote);
    
    const loadTitle = localStorage.getItem('title');
    const loadNote = localStorage.getItem('note');
    saveNote.innerHTML = `<p id="title-note">${loadTitle}</p>
    <textarea id="note" cols="50" rows="10" ref="textarea">${loadNote}</textarea>`;

    titleNote.value = '';
    note.value = '';
  }
});