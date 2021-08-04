// Write your tests here!
const chai = require("chai");
const expect = chai.expect;
const { caesar: caesarModule } = require("../src/caesar.js");

describe("caesar", () => {
  it("should return false if shift is not present", () => {
    const expected = false;
    const actual = caesarModule("thinkful", 0);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is less than -25", () => {
    const expected = false;
    const actual = caesarModule("thinkful", -26);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift more than 25", () => {
    const expected = false;
    const actual = caesarModule("thinkful", 26);
    expect(actual).to.equal(expected);
  });
  it("should ingnore capitcal letters ", () => {
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesarModule("THIS IS A SECRET MESSAGE!", 8);
    expect(actual).to.equal(expected);
  });
  it("should ingnore wrap around alphabet", () => {
    const expected = "c";
    const actual = caesarModule("z", 3);
    expect(actual).to.equal(expected);
  });
  it("should keep spaces and symbols intact", () => {
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesarModule("This is a secret message!", 8);
    expect(actual).to.equal(expected);
  });
});
