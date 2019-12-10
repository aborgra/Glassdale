const contentTarget = document.querySelector(".noteFormContainer")

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
      </form>
        `
    }

    render()
}

export default NoteFormComponent