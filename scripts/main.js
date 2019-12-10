import { getCriminals } from "./criminals/CriminalDataProvider.js";
import CriminalListComponent from "./criminals/CriminalList.js";
import { getConvictions } from "./convictions/ConvictionDataProvider.js";
// import CrimeSelectorComponent from "./convictions/ConvictionSelector.js";
import ConvictionSelect from "./convictions/ConvictionSelector.js";
import NoteFormComponent from "./notes/NoteForm.js";

NoteFormComponent()
getCriminals().then(CriminalListComponent);
getConvictions().then(ConvictionSelect)