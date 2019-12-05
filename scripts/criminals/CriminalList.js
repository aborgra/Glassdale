import { useCriminals } from "./CriminalDataProvider.js";
import CriminalComponent from "./Criminal.js";

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
