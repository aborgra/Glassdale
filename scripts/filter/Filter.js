const eventHub = document.querySelector(".container")

export const FilterComponent = () => {
return `
<button id="filterCriminals">Filter</button>
`
}

eventHub.addEventListener("click", clickEvent => {
  if(clickEvent.target.id === "filterCriminals") {
    console.log("filter event sent")
    const filterClicked = new CustomEvent ("filterClicked", {
      detail: {
        conviction: document.querySelector("#crimeSelect").value,
        arrestingOfficer: document.querySelector("#officerSelect").value
      }
    })
    eventHub.dispatchEvent(filterClicked)
  }
})
