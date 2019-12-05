let criminals = [];

export const useCriminals = () => {
  return criminals;
};

export const getCriminals = () => {
  return fetch("http://criminals.glassdale.us/criminals")
    .then(response => response.json())
    .then(parsedCriminals => {
      console.table(parsedCriminals);
      criminals = parsedCriminals.slice();
    });
};

/*
        Load database state into application state with a fetch().
        Make sure the last then() updates the criminals array
    */
