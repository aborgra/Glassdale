import { useCriminals } from "./CriminalDataProvider.js";
import CriminalComponent from "./Criminal.js";

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".criminalsContainer");


console.log("***This is the criminal list component***")


const CriminalListComponent = () => {

  const criminalCollection = useCriminals();

  eventHub.addEventListener("filterClicked", event => {
    console.log("filter event heard")
    const crime = event.detail.conviction
    const officer = event.detail.arrestingOfficer

    const matchingCriminals = criminalCollection.filter(
      (currentCriminal) => {

        if (currentCriminal.conviction===crime && currentCriminal.arrestingOfficer === officer){
        return currentCriminal
      }
    }
  )
    
    if(matchingCriminals.length > 0) {
      render(matchingCriminals)
    } else {alert("No Criminals Match Search Criteria")}

  
  }

  )
  eventHub.addEventListener("click", event => {
    if(event.target.id==="witness--close"){
    render(criminalCollection)}
  })


let render = criminalCollection =>{ 
  contentElement.innerHTML = `
${criminalCollection
  .map(currentCriminal => {
    return CriminalComponent(currentCriminal);
  })
  .join("")}`;
}
render(criminalCollection)
}
export default CriminalListComponent
