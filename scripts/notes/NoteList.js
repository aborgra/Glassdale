import noteComponent from "./Note.js";
import EditNoteComponent from "./EditNote.js";
import {
  useNotes,
  saveNote,
  getNotes,
  deleteNote,
  editNote
} from "./NoteDataProvider.js";

const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".notesContainer");

export const NoteListComponent = () => {
  let noteCollection = useNotes();

  eventHub.addEventListener("noteSaved", event => {
    saveNote(event.detail).then(() => {
      contentElement.innerHTML = "";
      document.querySelector("#noteDate").value = "";
      document.querySelector("#suspect").value = "";
      document.querySelector("#noteEntry").value = "";

      const allTheNotes = useNotes();
      render(allTheNotes);
    });
  });

  eventHub.addEventListener("showNoteButtonClicked", event => {
    if (contentElement.innerHTML === "") {
      document.querySelector("#showNotes").innerHTML = "Close Notes";

      getNotes().then(() => {
        const allTheNotes = useNotes();
        render(allTheNotes);
      });
    } else {
      document.querySelector("#showNotes").innerHTML = "Show Notes";
      contentElement.innerHTML = "";
    }
  });

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
      const [prefix, id] = clickEvent.target.id.split("--");
      deleteNote(id).then(() => render(useNotes()));
    }
  });

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("editNote--")) {
      const [prefix, noteId] = clickEvent.target.id.split("--");
      // find object by id then send to editNoteComponent
      const allNotes = useNotes();
      const theSelectedNote = allNotes.find(note => note.id === parseInt(noteId, 10));
      const contentTarget = document.querySelector(".dialog__editForm");

      renderEdit(contentTarget, theSelectedNote);
      const theDialog = document.querySelector(".dialog__editForm")
          theDialog.showModal();;
    }
  });

  eventHub.addEventListener("noteEdited", clickEvent => {
    console.log("edited note message heard")

      editNote(clickEvent.detail).then(() => render(useNotes()));
    
  });

  const render = noteCollection => {
    contentElement.innerHTML = `
  ${noteCollection
    .map(note => {
      return noteComponent(note);
    })
    .join(" ")}
  `;
  };

  const renderEdit = (contentTarget, theSelectedNote) => {
    contentTarget.innerHTML = `
  ${EditNoteComponent(theSelectedNote)}
  `;
  };
};
