const btnSave = document.querySelector('.btn-save');
const saveNote = document.querySelector('.save-note');
const timeDate = document.querySelector('.time');
const date = new Date();

let count = 0;

btnSave.addEventListener('click', ()=>{
  const values = {
    title : document.querySelector('#title-note').value,
    content : document.querySelector('#note').value,
    day : date.getDate(),
    month : date.getMonth(),
    year : date.getFullYear(),
    hour : date.getHours(),
    minutes : date.getMinutes(),
    seconds : date.getSeconds()
  }

  localStorage.setItem(`note-${count}`, JSON.stringify(values));
  count++;
  const loadNote = JSON.parse(localStorage.getItem(`note-${count - 1}`));
    
  const noteTitle = loadNote.title;
  const noteContent = loadNote.content;
    
    saveNote.innerHTML += `<p id="title-note">
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

    timeDate.innerHTML += `<p id='timeD'>
                          ${day}/${month}/${year} ${hour}:${minutes}:${seconds}
                          </p>`

    values.title.value = '';
    values.content.value = '';

  });

  window.onload = function (){
  if (localStorage.hasOwnProperty(`note-${count}`)){
    const loadNote = JSON.parse(localStorage.getItem(`note-${count}`));
    
    const noteTitle = loadNote.title;
    const noteContent = loadNote.content;

    saveNote.innerHTML += `<p id="title-note">
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

    timeDate.innerHTML += `<p id='timeD'>
                          ${day}/${month}/${year} ${hour}:${minutes}:${seconds}
                          </p>`
  }
}