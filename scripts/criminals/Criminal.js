const CriminalComponent = criminal => {
  return `
  <section class="criminal">
  <h5>${criminal.name}</h5>
  <div>Age: ${criminal.age}</div>
  <div>Conviction: ${criminal.conviction}</div>
  <div>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString(
    "en-US"
  )}</div>
  <div>Term End: ${new Date(criminal.incarceration.end).toLocaleDateString("en-US")}</div>
  </section>
  <br>
  `;
};

export default CriminalComponent;
