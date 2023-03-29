/*
\W matches any non-word character
\W is equivalent to [^A-Za-z0–9_]
\W matches anything that is not enclosed in the brackets
 */

function palindrome(str) {
  const re = /[\W_]/g
  const lowRegStr = str.toLowerCase().replace(re, '')
  const reverseStr = lowRegStr.split('').reverse().join('')
  return reverseStr === lowRegStr
}
palindrome('A man, a plan, a canal. Panama')
