const noteComponent = note => {
  console.log("building the note component")
  return `

  <div class="note">
  <div>Date: ${note.date}</div>
  <div>Suspect: ${note.suspect}</div>
  <div>Note: ${note.text}</div>
  <button id="deleteNote--${note.id}">Delete</button>
  <hr>
  </div>
  <br>

  `
}

export default noteComponent