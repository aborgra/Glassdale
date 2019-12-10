const CriminalComponent = criminal => {
  console.log("***This is the criminal rendering component***")
  return `
  <section class="criminal">
  <div class="criminal__name">${criminal.name}</div>
  <div class="criminal__info">
  <div>Age: ${criminal.age}</div>
  <div>Conviction: ${criminal.conviction}</div>
  <div>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString(
    "en-US"
  )}</div>
  <div>Term End: ${new Date(criminal.incarceration.end).toLocaleDateString("en-US")}</div>
  </div>
  </section>
  <br>
  `;
};

export default CriminalComponent;
