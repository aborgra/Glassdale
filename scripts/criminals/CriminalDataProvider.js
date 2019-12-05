let criminals = [];

export const useCriminals = () => {
  return criminals;
};
 console.log("** Fetching the criminal data**")

export const getCriminals = () => {
  return fetch("http://criminals.glassdale.us/criminals")
    .then(response => response.json())
    .then(parsedCriminals => {
      console.table(parsedCriminals);
      criminals = parsedCriminals.slice().sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});;
    });
};

/*
        Load database state into application state with a fetch().
        Make sure the last then() updates the criminals array
    */
