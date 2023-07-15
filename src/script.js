const note = document.querySelector('#note');
const btnSave = document.querySelector('.btn-save');
const saveNote = document.querySelector('.save-note');
const titleNote = document.querySelector('#title-note')

btnSave.addEventListener('click', (e) => {
  const valueTitle = titleNote.value;
  const valueNote = note.value;
  
  if (valueNote !== '') {
    const values ={
      title : `${valueTitle}`,
      content : `${valueNote}`
    }
    
    localStorage.setItem('title', JSON.stringify(values));
    localStorage.setItem('note', JSON.stringify(values));
    
    const loadTitle = JSON.parse(localStorage.getItem('title'));
    const loadNote = JSON.parse(localStorage.getItem('note'));
    
    const valueT = loadTitle.title;
    const valueN = loadNote.content;
    
    saveNote.innerHTML = `<p id="title-note">${valueT}</p>
    <textarea id="note" cols="50" rows="10" ref="textarea">${valueN}</textarea>`;
    
    
    titleNote.value = '';
    note.value = '';
  }
});

window.onload = function (){
  if (localStorage.hasOwnProperty('title') && localStorage.hasOwnProperty('note')){
    const loadTitle = JSON.parse(localStorage.getItem('title'));
    const loadNote = JSON.parse(localStorage.getItem('note'));
    
    const valueT = loadTitle.title;
    const valueN = loadNote.content;
    
    saveNote.innerHTML = `<p id="title-note">${valueT}</p>
    <textarea id="note" cols="50" rows="10" ref="textarea">${valueN}</textarea>`;
  }
}