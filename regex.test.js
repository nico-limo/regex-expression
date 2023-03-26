const {
  ignoreCase,
  match,
  matchAllCase,
  matchDot,
  vocalsMatch
} = require('./index')
const { describe, expect, test } = require('@jest/globals')

describe('Function ignoreCase', () => {
  test('freeCodeCamp should return true ', () => {
    expect(ignoreCase('freeCodeCamp')).toBeTruthy()
  })
  test('frEECodECaMp should return true', () => {
    expect(ignoreCase('frEECodECaMp')).toBeTruthy()
  })
  test('helloWorld should return false', () => {
    expect(ignoreCase('helloWorld')).toBeFalsy()
  })
})

describe('Function match', () => {
  const extractStr = "Extract the word 'coding' from this string."
  test('match should return coding', () => {
    expect(match(extractStr)).toBe('coding')
  })
})
describe('Function matchAllCase', () => {
  const string = 'Twinkle, twinkle, little star'
  const expected = ['Twinkle', 'twinkle']
  test('match should return coding', () => {
    expect(matchAllCase(string)).toEqual(expect.arrayContaining(expected))
  })
})
describe('Function matchDot', () => {
  const exampleStr = "Let's have fun with regular expressions!"
  const exampleStr1 = 'The sun is out today.'
  const exampleStr2 = 'Coding is a lot of fun.'
  const exampleStr3 = 'Seven days without a pun makes one weak.'
  const exampleStr4 =
    'She got fired from the hot dog stand for putting her hair in a bun.'
  const exampleStr5 = 'This one not have the match.'

  test('Match with fun and return true', () => {
    expect(matchDot(exampleStr)).toBeTruthy()
  })
  test('Match with sun and return true', () => {
    expect(matchDot(exampleStr1)).toBeTruthy()
  })
  test('Match with fun and return true', () => {
    expect(matchDot(exampleStr2)).toBeTruthy()
  })
  test('Match with pun and return true', () => {
    expect(matchDot(exampleStr3)).toBeTruthy()
  })
  test('Match with bun and return true', () => {
    expect(matchDot(exampleStr4)).toBeTruthy()
  })
  test('Not Match and return false', () => {
    expect(matchDot(exampleStr5)).toBeFalsy()
  })
})

describe('Function vocalsMatch', () => {
  const quoteSample =
    'Beware of bUgs in the AbovE cOde; I have only ProveD It correct, nOT tried it.'
  test('Should return 25 vocals', () => {
    expect(vocalsMatch(quoteSample)).toHaveLength(25)
  })
})
