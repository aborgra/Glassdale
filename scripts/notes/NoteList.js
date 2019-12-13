import noteComponent from "./Note.js";
import { useNotes, saveNote, getNotes, deleteNote } from "./NoteDataProvider.js";


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
    document.querySelector("#showNotes").innerHTML="Close Notes"

  getNotes().then(
    () => {
      const allTheNotes = useNotes()
      render(allTheNotes)
    }
  )}
  else{
    document.querySelector("#showNotes").innerHTML="Show Notes"
    contentElement.innerHTML=""}
})



eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteNote--")) {
      const [prefix, id] = clickEvent.target.id.split("--")
     deleteNote(id).then( () => render(useNotes()) )
  }
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