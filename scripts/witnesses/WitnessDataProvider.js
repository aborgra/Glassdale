let witnesses = [];

export const useWitnesses = () => {

  return witnesses;
};
 

export const getWitnesses = () => {
  console.log("** Fetching the witness data**")

  return fetch("http://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(parsedWitnesses => {
      console.table(parsedWitnesses);
      witnesses = parsedWitnesses.slice()})
    }
 
