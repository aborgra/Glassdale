const eventHub = document.querySelector(".container");

const CriminalComponent = criminal => {
  console.log("***This is the criminal rendering component***");
  return `
  <section class="criminal">
  <div class="criminal__name">${criminal.name}</div>
  <div class="criminal__info">
  <div>Age: ${criminal.age}</div>
  <div>Conviction: ${criminal.conviction}</div>
  <div>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString(
    "en-US"
  )}</div>
  <div>Term End: ${new Date(criminal.incarceration.end).toLocaleDateString(
    "en-US"
  )}</div>
  </div>

  <button type="button" class="interviewButton" id="interviewButton--${
    criminal.id
  }">Interview Associates</button>
  
  <dialog class="dialog--associate" id="details--${criminal.id}">
              ${criminal.known_associates
                .map(
                  associate => `
              <div>Name: ${associate.name}</div>
              <div>Alibi: ${associate.alibi}</div>
              <hr>`
                )
                
                .join("")
              }
                
              <button class="button--close">Close</button>
          </dialog>
  </section>
  <br>
  `;
};

eventHub.addEventListener("click", event => {
  if (event.target.id.startsWith("interviewButton--")) {
    const dialogSiblingSelector = `#${event.target.id}+dialog`;
    const theDialog = document.querySelector(dialogSiblingSelector);
    theDialog.showModal();
  } else if (event.target.classList.contains("button--close")) {
    const dialogElement = event.target.parentNode;
    dialogElement.close();
  }
});

export default CriminalComponent;
