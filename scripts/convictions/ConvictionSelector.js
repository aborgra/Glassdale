import { useConvictions } from "./ConvictionDataProvider.js";

// const eventHub = document.querySelector(".container");
const convictionListContainer = document.querySelector(".filters__crime");

const ConvictionSelect = () => {
  const convictions = useConvictions();

  // eventHub.addEventListener("change", changeEvent => {
  //   if (changeEvent.target.id ==="crimeSelect") {
  //     const selectedCrime = changeEvent.target.value;
  //     console.log(selectedCrime);

  //     const message = new CustomEvent("crimeSelected", {
  //       detail: {
  //         crime: selectedCrime
  //       }
  //     });

  //     eventHub.dispatchEvent(message);
  //   }
  // });
  const render = convictionsCollection => {
    convictionListContainer.innerHTML += `
  <select class="crimeDropdown" id="crimeSelect">
  <option value="0">Please select a crime...</option>
${convictionsCollection.map(
  crime => `<option id="crimeSelect">${crime}</option>`
)}
</select>
<button class="showWitnesses" id="showWitnesses">Show Witnesses</button>
      <button class="witness--close" id="witness--close">Show All Criminals</button>`;
  };
  render(convictions);
};
export default ConvictionSelect;
