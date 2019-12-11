import noteComponent from "./Note.js";
import { useNotes, saveNote, getNotes } from "./NoteDataProvider.js";


const eventHub = document.querySelector(".container");

export const NoteListComponent = () => {
let noteCollection = useNotes()

eventHub.addEventListener("noteSaved", event => {
  saveNote(event.detail)
  render(noteCollection)
})

eventHub.addEventListener("showNoteButtonClicked", event => {
  getNotes().then(
    () => {
      const allTheNotes = useNotes()
      render(allTheNotes)
    }
  )
})

const render = (noteCollection) => {
  const contentElement = document.querySelector(".notesContainer")
  contentElement.innerHTML = `
  ${noteCollection.map(note => {
    return noteComponent(note)
  }).join(" ")}
  `
}
// render(noteCollection)
}