const noteComponent = note => {
  console.log("building the note component")
  return `

  <div class="note">
  <div>Date: ${note.date}</div>
  <div>Suspect: ${note.suspect}</div>
  <div>Note: ${note.text}</div>
  <button id="deleteNote--${note.id}">Delete</button>
  <button id="editNote--${note.id}">Edit</button>
  <hr>
  </div>
  <br>
  <dialog class="dialog__editForm"></dialog>


  `
}

export default noteComponent