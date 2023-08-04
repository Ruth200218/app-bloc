const btnSave = document.querySelector('.btn-save');
const saveNote = document.querySelector('.save-note');
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
  };

  if(localStorage.getItem('count')){
     count = parseInt(localStorage.getItem('count'));
  } else {
    localStorage.setItem('count', + 1);
  };

  localStorage.setItem(`note-${count}`, JSON.stringify(values));

  const loadNote = JSON.parse(localStorage.getItem(`note-${count}`));
    
  const noteTitle = loadNote.title;
  const noteContent = loadNote.content;
  const day = loadNote.day;
  const month = loadNote.month;
  const year = loadNote.year;
  const hour = loadNote.hour;
  const minutes = loadNote.minutes;
  const seconds = loadNote.seconds;
    
    saveNote.innerHTML += `<div id= id-${count}>
                              <p id="title-note">${noteTitle}</p>
                              <textarea id="note" cols="50" rows="10" ref="textarea">${noteContent}</textarea>
                              <p id='timeD'>${day}/${month}/${year} ${hour}:${minutes}:${seconds}</p>
                              <button class="btn btn-edit">Editar</button>
                              <button class="btn btn-delete">Elminar</button>
                            </div>`;

  document.querySelector('#title-note').value = '';
  document.querySelector('#note').value = '';

    localStorage.setItem('count', count + 1);

  });

  window.onload = function (){
    if (localStorage.hasOwnProperty('count')){
      const count = parseInt(localStorage.getItem('count'));
      for (let i = 0; i<= count; i++){
        if (localStorage.hasOwnProperty(`note-${i}`)){
        const loadNote = JSON.parse(localStorage.getItem(`note-${i}`));

          const noteTitle = loadNote.title;
          const noteContent = loadNote.content;
          const day = loadNote.day;
          const month = loadNote.month;
          const year = loadNote.year;
          const hour = loadNote.hour;
          const minutes = loadNote.minutes;
          const seconds = loadNote.seconds;
          
          saveNote.innerHTML += `<div id= id-${i}>
                                    <p id="title-note">${noteTitle}</p>
                                    <textarea id="note" cols="50" rows="10" ref="textarea">${noteContent}</textarea>
                                    <p id='timeD'>${day}/${month}/${year} ${hour}:${minutes}:${seconds}</p>
                                    <button class="btn btn-edit">Editar</button>
                                    <button class="btn btn-delete">Elminar</button>
                                  </div>`;
        };
        
      };
    };

    const btnDelete = document.querySelectorAll('.btn-delete');
    
    btnDelete.forEach((button) =>{
      button.addEventListener('click', (event)=> {
        if(event.target.classList.contains('btn-delete')){
          const noteContainer = event.target.parentElement;
          const noteId = parseInt(noteContainer.id.replace('id-', ''));
          
            if(localStorage.hasOwnProperty(`note-${noteId}`)){
                localStorage.removeItem(`note-${noteId}`);
                noteContainer.remove();
            };
        };
      });
    });
    
};

