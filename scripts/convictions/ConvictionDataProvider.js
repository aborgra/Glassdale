let convictions = [];

export const useConvictions = () => {
  return convictions;
};

console.log("**Fetching the conviction data**")

export const getConvictions = () => {
  return fetch("http://criminals.glassdale.us/crimes")
  .then(response => response.json())
  .then(parsedCrimes => {
    console.table(parsedCrimes)
    convictions = parsedCrimes.slice()
  })
}