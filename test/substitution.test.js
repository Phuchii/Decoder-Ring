// Write your tests here!
const chai = require("chai");
const expect = chai.expect;
const { substitution: substitutionModule } = require("../src/substitution.js");

describe("substitution", () => {
  it("returns false if given alphabet isn't exactly 26 characters", () => {
    const expected = false;
    const actual = substitutionModule("thinkful", "short");
    expect(actual).to.equal(expected);
  });
  it("It correctly translates the given phrase, based on the alphabet given to the function", () => {
    const expected1 = "y&ii$r&";
    const actual1 = substitutionModule("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected2 = "message";
    const actual2 = substitutionModule(
      "y&ii$r&",
      "$wae&zrdxtfcygvuhbijnokmpl",
      false
    );
    expect(actual1).to.equal(expected1);
    expect(actual2).to.equal(expected2);
  });
  it("It returns false if there are any duplicate characters in the given alphabet", () => {
    const actual = substitutionModule("thinkful", "abcabcabcabcabcabcabcabcyz");
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("should maintains spaces in the message, before and after encoding or decoding", () => {
    const decode = substitutionModule(
      "you are an excellant spy",
      "$wae&zrdxtfcygvuhbijnokmpl"
    );
    const decodeExpected = "pvn $b& $g &ma&cc$gj iup";
    const encode = substitutionModule(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    const encodeExpected = "elp xhm xf mbymwwmfj dne";
    expect(decode).to.equal(decodeExpected);
    expect(encode).to.equal(encodeExpected);
  });
  it("it should ignore capitcal letters", () => {
    const capital = substitutionModule(
      "ThInkFUl",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    const lowercase = substitutionModule(
      "thinkful",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    expect(capital).to.equal(lowercase);
  });
});
