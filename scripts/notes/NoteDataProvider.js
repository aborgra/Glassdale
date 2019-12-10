const eventHub = document.querySelector(".container");

const NoteFormComponent = () => {

  // Handle internal element click
  eventHub.addEventListener("click", clickEvent => {
      if (clickEvent.target.id === "saveNote") {

          // Make a new object representation of a note
          const newNote = {
              // Key/value pairs here
              date:"noteDate",
              suspect:"suspect",
              noteEntry:"noteEntry"
          }

          // Change API state and application state
          saveNote(newNote)
      }
  })

let notes = [];

export const useNotes = () => {
  return notes;
};
console.log("** Fetching the notes data**");

export const getNotes = () => {
  return fetch("http://localhost:8088/notes")
    .then(response => response.json())
    .then(parsedNotes => {
      console.table(parsedNotes);
      notes = parsedNotes.slice();
    });
};

export const saveNote = note => {
  fetch("http://localhost:8080/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(note)
  }).then(getNotes);
};
