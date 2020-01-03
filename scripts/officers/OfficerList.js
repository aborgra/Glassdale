import {useCriminals} from "../criminals/CriminalDataProvider.js"
import CriminalComponent from "../criminals/Criminal.js"

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".criminalsContainer")

const OfficerListComponent = () => {
 

eventHub.addEventListener("officerSelected", event => {
  const officer = event.detail.officer
  const criminalCollection = useCriminals()
console.log("officer event heard")
  const matchingCriminals = criminalCollection.filter(
    (currentCriminal) => {
      if (currentCriminal.arrestingOfficer===officer){
      return currentCriminal
    }
  }
)
  
  if(matchingCriminals.length > 0) {
    render(matchingCriminals)
  } else {render(criminalCollection)}


}

)


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
export default OfficerListComponent
