// Ejercicios Regex

// the i will ignore cases like
const ignoreCase = (myString) => {
  const fccRegex = /freeCodeCamp/i
  return fccRegex.test(myString)
}

// match function will find the same word and return an array
const match = (myString) => {
  const codingRegex = /coding/
  const [stringResult] = myString.match(codingRegex)
  return stringResult
}

const matchAllCase = (myString) => {
  // You can put parameters together
  const starRegex = /Twinkle/gi
  return myString.match(starRegex)
}
const matchDot = (myString) => {
  const unRegex = /un./
  return unRegex.test(myString)
}
const vocalsMatch = (myString) => {
  const vowelRegex = /[aeiou]/gi
  return myString.match(vowelRegex)
}
const vocalsRangeMatch = (myString) => {
  const myRegex = /[a-z]/gi
  return myString.match(myRegex)
}
const rangeconsttersNumbersMatch = (myString) => {
  const myRegex = /[h-s2-6]/gi
  return myString.match(myRegex)
}

// ^ negate and find all the character not equal, inclusive spaces dots, !, [], or comas
const rangeNegateMatch = (myString) => {
  const myRegex = /[^aeiou0-9]/gi
  return myString.match(myRegex)
}

// + Check if a constter is consecutire like match +a on aaba will return ['aa','a']
const matchConsecutive = (myString) => {
  const myRegex = /s+/g
  return myString.match(myRegex)
}

// * Check if a constter occur zero or more time like match +a on aaba will return ['aa','a']
const matchZeroOrMore = (myString) => {
  const myRegex = /Aa*/
  const result = myString.match(myRegex)
  return result
}

// The dot is a wildcard and the ? will find the first match between the search parameter
const lazyMatch = (myString) => {
  const myRegex = /<.*?>/
  const result = myString.match(myRegex)
  return result
}

/*
Time to pause and test your new regex writing skills. 
A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. 
You are responsible for finding all of the criminals at once.

Here's an example to review how to do this:
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"

But not match
""
"ABC"
"abcabc"

The regex /z+/ matches the constter z when it appears one or more times in a row. It would find matches in all of the following strings:
 */
const findCriminal = (myString) => {
  const myRegex = /C+/
  const result = myString.match(myRegex)
  return result
}

// First world checked
const callFirstMatch = (myString) => {
  const myRegex = /^Cal/
  return myRegex.test(myString)
}

// Last world checked
const callLasttMatch = (myString) => {
  const myRegex = /one$/
  return myRegex.test(myString)
}

// Match upper and lowercase, include _ underscore
const matchAll = (myString) => {
  const myRegex = /\w/
  return myRegex.test(myString)
}

module.exports = {
  ignoreCase,
  match,
  matchAllCase,
  matchDot,
  vocalsMatch,
  vocalsRangeMatch,
  rangeconsttersNumbersMatch,
  rangeNegateMatch,
  matchConsecutive,
  matchZeroOrMore,
  lazyMatch,
  findCriminal,
  callFirstMatch,
  callLasttMatch,
  matchAll
}

// i = IgnoreCase
// g = Find more of one result as an array
// . = Is a wildcard that will match any one character
// [] = find the specific element
// - = define a range of characters to match
// [^] is used to negate
// + = consecutive
// * = zero or more
// ? = is a lazy way to find a match in a spec
