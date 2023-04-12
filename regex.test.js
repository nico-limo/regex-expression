const {
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
} = require("./index");
const { describe, expect, test } = require("@jest/globals");

describe("Function ignoreCase", () => {
  test("freeCodeCamp should return true ", () => {
    expect(ignoreCase("freeCodeCamp")).toBeTruthy();
  });
  test("frEECodECaMp should return true", () => {
    expect(ignoreCase("frEECodECaMp")).toBeTruthy();
  });
  test("helloWorld should return false", () => {
    expect(ignoreCase("helloWorld")).toBeFalsy();
  });
});

describe("Function match", () => {
  const extractStr = "Extract the word 'coding' from this string.";
  test("match should return coding", () => {
    expect(match(extractStr)).toBe("coding");
  });
});

describe("Function matchAllCase", () => {
  const string = "Twinkle, twinkle, little star";
  const expected = ["Twinkle", "twinkle"];
  test("match should return coding", () => {
    expect(matchAllCase(string)).toEqual(expect.arrayContaining(expected));
  });
});

describe("Function matchDot", () => {
  const exampleStr = "const's have fun with regular expressions!";
  const exampleStr1 = "The sun is out today.";
  const exampleStr2 = "Coding is a lot of fun.";
  const exampleStr3 = "Seven days without a pun makes one weak.";
  const exampleStr4 =
    "She got fired from the hot dog stand for putting her hair in a bun.";
  const exampleStr5 = "This one not have the match.";

  test("Match with fun and return true", () => {
    expect(matchDot(exampleStr)).toBeTruthy();
  });
  test("Match with sun and return true", () => {
    expect(matchDot(exampleStr1)).toBeTruthy();
  });
  test("Match with fun and return true", () => {
    expect(matchDot(exampleStr2)).toBeTruthy();
  });
  test("Match with pun and return true", () => {
    expect(matchDot(exampleStr3)).toBeTruthy();
  });
  test("Match with bun and return true", () => {
    expect(matchDot(exampleStr4)).toBeTruthy();
  });
  test("Not Match and return false", () => {
    expect(matchDot(exampleStr5)).toBeFalsy();
  });
});

describe("Function vocalsMatch", () => {
  const quoteSample =
    "Beware of bUgs in the AbovE cOde; I have only ProveD It correct, nOT tried it.";
  test("Should return 25 vocals", () => {
    expect(vocalsMatch(quoteSample)).toHaveLength(25);
  });
});

describe("Function vocalsRangeMatch", () => {
  const quoteSample = "thE quiCk BrOWN fox jumpS Over the lazy doG.";
  test("Should return 35 vocals", () => {
    expect(vocalsRangeMatch(quoteSample)).toHaveLength(35);
  });
  test("Should not have a dot on the array", () => {
    expect(vocalsRangeMatch(quoteSample)).not.toContain(".");
  });
});

describe("Function rangeconsttersNumbersMatch", () => {
  const quoteSample = "BluebeRrY 3.141592653s are dElIcious.";
  test("Should return 17 items", () => {
    expect(rangeconsttersNumbersMatch(quoteSample)).toHaveLength(17);
  });
  test("Should not have a dot on the array", () => {
    expect(rangeconsttersNumbersMatch(quoteSample)).not.toContain(".");
  });
});

describe("Function rangeNegateMatch", () => {
  const quoteSample = "3 blind mice.";
  test("Should return 9 items", () => {
    expect(rangeNegateMatch(quoteSample)).toHaveLength(9);
  });
  test("Should not have a number", () => {
    expect(rangeNegateMatch(quoteSample)).not.toContain("3");
  });
  test("Should have a dot", () => {
    expect(rangeNegateMatch(quoteSample)).toContain(".");
  });
});

describe("Function matchConsecutive", () => {
  const quoteSample = "Mississippi";
  test("Should return 2 items", () => {
    expect(matchConsecutive(quoteSample)).toHaveLength(2);
  });
  test('Should be equal to ["ss","ss"]', () => {
    expect(matchConsecutive(quoteSample)).toEqual(["ss", "ss"]);
  });
});

describe("Function matchZeroOrMore", () => {
  const quoteSample = "Aaaaaaaaaaaaaaaarrrgh!";
  const quoteSample2 =
    "He made a fair move. Screaming about it can't help you.";
  test("Should contain Aaaaaaaaaaaaaaaa", () => {
    expect(matchZeroOrMore(quoteSample)).toContain("Aaaaaaaaaaaaaaaa");
  });
  test("Should not match and return null", () => {
    expect(matchZeroOrMore(quoteSample2)).toBeNull();
  });
});

describe("Function lazyMatch", () => {
  const text = "<h1>Winter is coming</h1>";

  test("Should return ", () => {
    expect(lazyMatch(text)).toContain("<h1>");
  });
});

describe("Function findCriminal", () => {
  const text1 = "P6P2P7P4P5CCCCCP3P1";
  const text2 = "";
  const text3 = "P1P5P4CCCcP2P6P3";
  const text4 = "P1P2P3";

  test("Should match CCCCC", () => {
    expect(findCriminal(text1)).toContain("CCCCC");
  });
  test("Should not Match an empty array", () => {
    expect(findCriminal(text2)).toBeNull();
  });
  test("Should Match CCC", () => {
    expect(findCriminal(text3)).toContain("CCC");
  });
  test("Should not Match P1P2P3", () => {
    expect(findCriminal(text4)).toBeNull();
  });
});

describe("Function callFirstMatch", () => {
  const textTrue = "Cal and Ricky both like racing.";
  const textFalse = "Ricky and Cal both like racing.";
  const textFalse2 = "Ca is a element.";

  test("Should find Carl and return True", () => {
    expect(callFirstMatch(textTrue)).toBeTruthy();
  });
  test("Should not find Cal and return False", () => {
    expect(callFirstMatch(textFalse)).toBeFalsy();
  });
  test("Should not find Cal and return False", () => {
    expect(callFirstMatch(textFalse2)).toBeFalsy();
  });
});
describe("Function callLasttMatch", () => {
  const textTrue = "Harry Potter is the choosen one";
  const textFalse = "One Pience is real";
  const textFalse2 = "I am the last one?";
  const textFalse3 = "One";

  test("Should find one and return True", () => {
    expect(callLasttMatch(textTrue)).toBeTruthy();
  });
  test("Should not find one and return False", () => {
    expect(callLasttMatch(textFalse)).toBeFalsy();
  });
  test("Should not find one and return False", () => {
    expect(callLasttMatch(textFalse2)).toBeFalsy();
  });
  test("Should not find one because have an UppcerCase and return false", () => {
    expect(callLasttMatch(textFalse3)).toBeFalsy();
  });
});

describe("Function matchAll", () => {
  const strings = "Avada Kadabra";
  const numbers = "17";
  const string_underscore = "I_AM_YOUR_FATHER";

  test("Should find one and return True", () => {
    expect(matchAll(strings)).toBeTruthy();
  });
  test("Should not find one and return False", () => {
    expect(matchAll(numbers)).toBeTruthy();
  });
  test("Should not find one and return False", () => {
    expect(matchAll(string_underscore)).toBeTruthy();
  });
});

describe("Function negateMatchAlphaNumeric", () => {
  const strings = "Luke";
  const numbers = "17";
  const notString = "@";
  const exampleSpace = "Never say Never";
  const example = "myemail@email.com";

  test("Should not find match on a string", () => {
    expect(negateMatchAlphaNumeric(strings)).toBeNull();
  });
  test("Should not find match on a number", () => {
    expect(negateMatchAlphaNumeric(numbers)).toBeNull();
  });
  test("Should find @", () => {
    expect(negateMatchAlphaNumeric(notString)).toContain("@");
  });
  test("Should find the spaces", () => {
    expect(negateMatchAlphaNumeric(exampleSpace)).toContain(" ");
  });
  test("Should not find one and return False", () => {
    expect(negateMatchAlphaNumeric(example)).toContain("@", ".");
  });
});

describe("Function matchAllNumbers", () => {
  const isGlobal = true;
  const example = "2001: A Space Odyssey";
  const example2 = "Not numbers here!";

  test("Should be an array with the exact values", () => {
    expect(matchAllNumbers(example, isGlobal)).toEqual(
      expect.arrayContaining(["2", "0", "0", "1"])
    );
  });
  test("Should be an array with the exact values", () => {
    expect(matchAllNumbers(example)).toEqual(expect.arrayContaining(["2"]));
  });
  test("Should return null because there is no numbers", () => {
    expect(matchAllNumbers(example2)).toBeNull();
  });
});

describe("Function negateMatchAllNumbers", () => {
  const isGlobal = true;
  const example = "2001: A Space Odyssey";

  test("Should not include any number and have a lenght of 17", () => {
    expect(negateMatchAllNumbers(example, isGlobal)).not.toEqual(
      expect.arrayContaining(["2", "0", "0", "1"])
    );
    expect(negateMatchAllNumbers(example, isGlobal)).toHaveLength(17);
  });
  test('Should find the symbol ":"', () => {
    expect(negateMatchAllNumbers(example)).toEqual(
      expect.arrayContaining([":"])
    );
  });
});

describe("Function restricUsername", () => {
  test("Your regex should match the string JACK", () => {
    expect(restricUsername("JACK")).toContain("JACK");
  });
  test("Your regex should not match the string J", () => {
    expect(restricUsername("J")).toBeNull();
  });
  test("Your regex should match the string Jo", () => {
    expect(restricUsername("Jo")).toContain("Jo");
  });
  test("Your regex should match the string Oceans11", () => {
    expect(restricUsername("Oceans11")).toContain("Oceans11");
  });
  test("Your regex should match the string RegexGuru", () => {
    expect(restricUsername("RegexGuru")).toContain("RegexGuru");
  });
  test("Your regex should not match the string 007", () => {
    expect(restricUsername("007")).toBeNull();
  });
  test("Your regex should not match the string 9", () => {
    expect(restricUsername("9")).toBeNull();
  });
  test("Your regex should not match the string A1", () => {
    expect(restricUsername("A1")).toBeNull();
  });
  test("Your regex should not match the string BadUs3rnam3", () => {
    expect(restricUsername("BadUs3rnam3")).toBeNull();
  });
  test("Your regex should match the string Z97", () => {
    expect(restricUsername("Z97")).toContain("Z97");
  });
  test("Your regex should not match the string c57bT3", () => {
    expect(restricUsername("c57bT3")).toBeNull();
  });
  test("Your regex should match the string AB1", () => {
    expect(restricUsername("AB1")).toContain("AB1");
  });
  test("Your regex should not match the string J%4", () => {
    expect(restricUsername("J%4")).toBeNull();
  });
});

describe("Function whiteSpaceMatch", () => {
  const sample = "Whitespace is important in separating words";

  test("Should find 5 spaces", () => {
    expect(whiteSpaceMatch(sample)).toHaveLength(5);
    expect(whiteSpaceMatch(sample)).toEqual(
      expect.arrayContaining([" ", " ", " ", " ", " "])
    );
  });
});

describe("Function withoutWhiteSpaceMatch", () => {
  const sample = "Whitespace is important in separating words";

  test("Should find 38 spaces without spaces", () => {
    expect(withoutWhiteSpaceMatch(sample)).toHaveLength(38);
    expect(withoutWhiteSpaceMatch(sample)).not.toContain(" ");
  });
});
describe("Function betweenNumbers", () => {
  const sample = "Ohhh no";
  const sample2 = "Ohhhhhhh no";
  const sample3 = "Ohhhhno";

  test("Should return true", () => {
    expect(betweenNumbers(sample)).toContain("Ohhh no");
  });
  test("Should return false", () => {
    expect(betweenNumbers(sample2)).toBeNull();
    expect(betweenNumbers(sample3)).toBeNull();
  });
});
