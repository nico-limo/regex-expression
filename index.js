// Ejercicios Regex
const ignoreCase = (myString) => {
  const fccRegex = /freeCodeCamp/i
  return fccRegex.test(myString)
}
const match = (myString) => {
  const codingRegex = /coding/
  let [stringResult] = myString.match(codingRegex)
  return stringResult
}
const matchAllCase = (myString) => {
  // You can put parameters together
  let starRegex = /Twinkle/gi
  return myString.match(starRegex)
}
const matchDot = (myString) => {
  let unRegex = /un./
  return unRegex.test(myString)
}
const vocalsMatch = (myString) => {
  const vowelRegex = /[aeiou]/gi
  return myString.match(vowelRegex)
}

module.exports = {
  ignoreCase,
  match,
  matchAllCase,
  matchDot,
  vocalsMatch
}

// i = IgnoreCase
// g = Find more of one result as an array
// [] = find the specific element
