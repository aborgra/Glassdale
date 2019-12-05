import { useConvictions } from "./ConvictionDataProvider.js";




const CrimeSelectorComponent = () => {
  const convictionListContainer = document.querySelector(".filters__crime");
  const crimes = useConvictions();

  const render = convictionsCollection => {
  convictionListContainer.innerHTML += `
  <select class="dropdown" id="crimeSelect">
  <option value="0">Please select a crime...</option>
${crimes.map(crime => 
  `<option>${crime}</option>`
  )
}
</select>`
}
render(crimes)
}
export default CrimeSelectorComponent;