// const eventHub = document.querySelector(".container");

// eventHub.addEventListener("newNoteEntry", 
// event => {
//   saveNote(newNote)
// })


let notes = [];

export const useNotes = () => {
  return notes;
};
console.log("** Fetching the notes data**");

export const getNotes = () => {
  return fetch("http://localhost:8080/noteEntries")
    .then(response => response.json())
    .then(parsedNotes => {
      console.table(parsedNotes);
      notes = parsedNotes.slice();
    });
};

export const saveNote = note => {
  return fetch("http://localhost:8080/noteEntries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(note)
  }).then(getNotes);
};

export const deleteNote = noteId => {
  return fetch(`http://localhost:8080/noteEntries/${noteId}`, {
      method: "DELETE"
  })
      .then(getNotes)
}
