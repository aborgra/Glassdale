import { getNotes } from "../notes/NoteDataProvider.js";

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")




const NoteFormComponent = () => {
    const render = () => {
        contentTarget.innerHTML = `
        <form class="form" action="">
        <fieldset class="form__noteDate">
          <label for="noteDate">Date of Note</label>
          <input type="date" name="noteDate" id="noteDate">
        </fieldset>
        <fieldset class="form__Suspect">
          <label for="suspect">Suspect</label>
          <input type="text" name="suspect" id="suspect">
        </fieldset>
        <fieldset class="form__noteEntry">
          <label for="noteEntry">Note Entry<label>
            <br>
              <textarea name=" noteEntry" id="noteEntry" cols="30" rows="10"></textarea>
        </fieldset>
        <fieldset class="form__button">
          <button id="saveNote" type="button">Save Note</button>
        </fieldset>
        <fieldset id="showNotes" type="button">Show Notes</button>
        </fieldset>
      </form>
        `
    }

    render()
}

eventHub.addEventListener("click", clickEvent => {
  if(clickEvent.target.id === "saveNote") {
   
    const noteDate = document.querySelector("#noteDate").value
    const suspect = document.querySelector("#suspect").value
    const noteText = document.querySelector("#noteEntry").value

    const newNote = new CustomEvent ("noteSaved",
    {
      detail: {
        date: noteDate,
        suspect: suspect,
        text: noteText
      }
    })
    
    
    eventHub.dispatchEvent(newNote)
  }})
eventHub.addEventListener("click", clickEvent  => {
  if(clickEvent.target.id==="showNotes") {
    const message = new CustomEvent("showNoteButtonClicked")
      eventHub.dispatchEvent(message)

      }
    
  })



export default NoteFormComponent