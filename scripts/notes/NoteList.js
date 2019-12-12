import noteComponent from "./Note.js";
import { useNotes, saveNote, getNotes } from "./NoteDataProvider.js";


const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".notesContainer")
export const NoteListComponent = () => {
let noteCollection = useNotes()

eventHub.addEventListener("noteSaved", event => {
  saveNote(event.detail)
  render(noteCollection)
})

eventHub.addEventListener("showNoteButtonClicked", event => {
  if(contentElement.innerHTML === ""){
  getNotes().then(
    () => {
      const allTheNotes = useNotes()
      render(allTheNotes)
    }
  )}
  else{contentElement.innerHTML=""}
})

const render = (noteCollection) => {
  
  contentElement.innerHTML = `
  ${noteCollection.map(note => {
    return noteComponent(note)
  }).join(" ")}
  `
}
// render(noteCollection)
}