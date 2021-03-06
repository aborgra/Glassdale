let officers = [];

export const useOfficers = () => {
  return officers.sort();
};

export const getOfficers = () => {
  return fetch("http://criminals.glassdale.us/officers")
    .then(response => response.json())
    .then(parsedOfficers => {
      console.table(parsedOfficers);
      officers = parsedOfficers.slice();
    });
};


