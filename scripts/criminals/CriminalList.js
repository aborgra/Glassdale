import { useCriminals } from "./CriminalDataProvider.js";
import CriminalComponent from "./Criminal.js";

console.log("***This is the criminal list component***")
const CriminalListComponent = () => {
  const contentElement = document.querySelector(".criminalsContainer");
  const criminals = useCriminals();
  contentElement.innerHTML += `
${criminals
  .map(currentCriminal => {
    return CriminalComponent(currentCriminal);
  })
  .join("")}`;
};

export default CriminalListComponent;
