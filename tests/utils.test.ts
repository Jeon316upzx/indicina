import { describe } from "node:test";
import {
  encodeUrl,
  generateRandomChar,
  getAllCharacters,
  getRandomIndex,
} from "../src/utils/encode";

describe("Utility Functions Test Suite", async () => {
  it("Should Get Random Index", () => {
    const min = 1;
    const max = 10;
    const index = getRandomIndex(min, max);
    expect(index).toBeGreaterThanOrEqual(min);
    expect(index).toBeLessThanOrEqual(max);
  });

  it("Should Get Random Character", () => {
    const character = generateRandomChar();
    expect(character.length).toBe(1);
  });

  it("Should Get All Characters", () => {
    const characters = getAllCharacters();
    expect(characters.length).toBe(62);
  });

  it("Should Generate 6 digit string(alphanumeric)", () => {
    const urlSix = encodeUrl(6);
    console.log(urlSix)
    const urlFour = encodeUrl(4);
    console.log(urlFour)

    expect(urlSix.length).toBe(6);
    expect(urlFour.length).toBe(4);
  });
});
