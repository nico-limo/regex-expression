// Ejercicios Regex

// the i will ignore cases like
const ignoreCase = (myString) => {
  const fccRegex = /freeCodeCamp/i;
  return fccRegex.test(myString);
};

// match function will find the same word and return an array
const match = (myString) => {
  const codingRegex = /coding/;
  const [stringResult] = myString.match(codingRegex);
  return stringResult;
};

const matchAllCase = (myString) => {
  // You can put parameters together
  const starRegex = /Twinkle/gi;
  return myString.match(starRegex);
};
const matchDot = (myString) => {
  const unRegex = /un./;
  return unRegex.test(myString);
};
const vocalsMatch = (myString) => {
  const vowelRegex = /[aeiou]/gi;
  return myString.match(vowelRegex);
};
const vocalsRangeMatch = (myString) => {
  const myRegex = /[a-z]/gi;
  return myString.match(myRegex);
};
const rangeconsttersNumbersMatch = (myString) => {
  const myRegex = /[h-s2-6]/gi;
  return myString.match(myRegex);
};

// ^ negate and find all the character not equal, inclusive spaces dots, !, [], or comas
const rangeNegateMatch = (myString) => {
  const myRegex = /[^aeiou0-9]/gi;
  return myString.match(myRegex);
};

// + Check if a constter is consecutire like match +a on aaba will return ['aa','a']
const matchConsecutive = (myString) => {
  const myRegex = /s+/g;
  return myString.match(myRegex);
};

// * Check if a constter occur zero or more time like match +a on aaba will return ['aa','a']
const matchZeroOrMore = (myString) => {
  const myRegex = /Aa*/;
  const result = myString.match(myRegex);
  return result;
};

// The dot is a wildcard and the ? will find the first match between the search parameter
const lazyMatch = (myString) => {
  const myRegex = /<.*?>/;
  const result = myString.match(myRegex);
  return result;
};

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
  const myRegex = /C+/;
  const result = myString.match(myRegex);
  return result;
};

// First world checked
const callFirstMatch = (myString) => {
  const myRegex = /^Cal/;
  return myRegex.test(myString);
};

// Last world checked
const callLasttMatch = (myString) => {
  const myRegex = /one$/;
  return myRegex.test(myString);
};

// Match upper and lowercase, include _ underscore
const matchAll = (myString) => {
  const myRegex = /\w/;
  return myRegex.test(myString);
};

// The W will negate w and match all the negatives, include spaces like " "
const negateMatchAlphaNumeric = (myString) => {
  const myRegex = /\W/g;
  return myString.match(myRegex);
};

// the \d is same like [0-9]
const matchAllNumbers = (myString, isGlobal) => {
  let myRegex = /\d/;
  if (isGlobal) {
    myRegex = /\d/g;
  }
  return myString.match(myRegex);
};
// the \D is same like [^0-9]
const negateMatchAllNumbers = (myString, isGlobal) => {
  let myRegex = /\D/;
  if (isGlobal) {
    myRegex = /\D/g;
  }
  return myString.match(myRegex);
};

const restricUsername = (myString) => {
  // ^ start of the input
  // [a-z][a-z] first two characters need to be string
  // + could have more strings consecutive
  // /d* could have zero or more numbers
  // $ how need to end
  // | need to be OR
  //  ^[a-z]\d\d$ this mean that start with a letter and continue with two numbers.
  let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d$/i;
  return myString.match(userCheck);
};

// the \s will match all the white spaces
const whiteSpaceMatch = (myString) => {
  const myRegex = /\s/g;
  return myString.match(myRegex);
};

// the \S will match all the non white spaces
const withoutWhiteSpaceMatch = (myString) => {
  const myRegex = /\S/g;
  return myString.match(myRegex);
};

// the \s will match spaces with the rest of the string
const betweenNumbers = (myString) => {
  const myRegex = /Oh{3,6}\sno/;
  return myString.match(myRegex);
};

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
  matchAll,
  negateMatchAlphaNumeric,
  matchAllNumbers,
  negateMatchAllNumbers,
  restricUsername,
  whiteSpaceMatch,
  withoutWhiteSpaceMatch,
  betweenNumbers,
};

// i = IgnoreCase
// g = Find more of one result as an array
// . = Is a wildcard that will match any one character
// [] = find the specific element
// - = define a range of characters to match
// [^] is used to negate
// + = consecutive
// * = zero or more
// ? = is a lazy way to find a match in a spec
// | == is a OR statments
