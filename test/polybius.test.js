// Write your tests here!
const chai = require("chai");
const expect = chai.expect;
const { polybius: polybiusModule } = require("../src/polybius.js");

describe("polybius", () => {
  it("When encoding, it translates the letters i and j to 42", () => {
    const expected = "42";
    const actual = polybiusModule("i");
    const expected2 = "42";
    const actual2 = polybiusModule("j");
    expect(actual).to.equal(expected);
    expect(actual2).to.equal(expected2);
  });
  it("When decoding, it translates 42 to (i/j)", () => {
    const expected = "(i/j)";
    const actual = polybiusModule("42", false);
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const capital = polybiusModule("THINKFUL");
    const lowercase = polybiusModule("thinkful");
    expect(capital).to.equal(lowercase);
  });
  it("should maintains spaces in the message, before and after encoding or decoding", () => {
    const decode = polybiusModule("i am a dog woof");
    const decodeExpected = "42 1123 11 414322 25434312";
    const encode = polybiusModule("i am the bone of my sword");
    const encodeExpected = "42 1123 443251 21433351 4312 2345 3425432441";
    expect(decode).to.equal(decodeExpected);
    expect(encode).to.equal(encodeExpected);
  });
  it("when decoding 42, both 'i' and 'j' should be shown somehow", () => {
    //stuff
  });
});
