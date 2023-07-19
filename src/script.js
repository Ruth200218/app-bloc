const note = document.querySelector('#note');
const btnSave = document.querySelector('.btn-save');
const saveNote = document.querySelector('.save-note');
const titleNote = document.querySelector('#title-note')
const timeDate = document.querySelector('.time');


btnSave.addEventListener('click', (e) => {
  const valueTitle = titleNote.value;
  const valueNote = note.value;
  const date = new Date();
  
  if (valueNote !== '') {
    const values ={
      title : valueTitle,
      content : valueNote,
      day : date.getDate(),
      month : date.getMonth(),
      year : date.getFullYear(),
      hour : date.getHours(),
      minutes : date.getMinutes(),
      seconds : date.getSeconds()
    };
    
    localStorage.setItem('note', JSON.stringify(values));
    const loadNote = JSON.parse(localStorage.getItem('note'));
    
    const noteTitle = loadNote.title;
    const noteContent = loadNote.content;
    
    saveNote.innerHTML = `<p id="title-note">
                            ${noteTitle}
                          </p>
                          <textarea id="note" cols="50" rows="10" ref="textarea">
                            ${noteContent}
                          </textarea>`;

    const day = loadNote.day;
    const month = loadNote.month;
    const year = loadNote.year;
    const hour = loadNote.hour;
    const minutes = loadNote.minutes;
    const seconds = loadNote.seconds;

    timeDate.innerHTML = `<p id='timeD'>
                          ${day}/${month}/${year} ${hour}:${minutes}:${seconds}
                          </p>`

    titleNote.value = '';
    note.value = '';
  }
});

window.onload = function (){
  if (localStorage.hasOwnProperty('note', 'date')){
    const loadNote = JSON.parse(localStorage.getItem('note'));
    
    const noteTitle = loadNote.title;
    const noteContent = loadNote.content;
    
    saveNote.innerHTML = `<p id="title-note">${noteTitle}</p>
    <textarea id="note" cols="50" rows="10" ref="textarea">${noteContent}</textarea>`;

    const day = loadNote.day;
    const month = loadNote.month;
    const year = loadNote.year;
    const hour = loadNote.hour;
    const minutes = loadNote.minutes;
    const seconds = loadNote.seconds;

    timeDate.innerHTML = `<p id='timeD'>
                          ${day}/${month}/${year} ${hour}:${minutes}:${seconds}
                          </p>`
  }
}

