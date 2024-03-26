import {
  encodeUrl,
  generateRandomChar,
  getAllCharacters,
  getRandomIndex,
} from "../src/utils/encode";

test("Should Get Random Index", () => {
  const min = 1;
  const max = 10;
  const index = getRandomIndex(min, max);
  expect(index).toBeGreaterThanOrEqual(min);
  expect(index).toBeLessThanOrEqual(max);
});

test("Should Get Random Character", () => {
  const character = generateRandomChar();
  expect(character.length).toBe(1);
});

test("Should Get All Characters", () => {
  const characters = getAllCharacters();
  expect(characters.length).toBe(62);
});

test("Should Generate 6 digit string(alphanumeric)", () => {
  const urlFive = encodeUrl(5);
  const urlFour = encodeUrl(4);
  const urlThree = encodeUrl(3);

  expect(urlFive.length).toBe(5);
  expect(urlFour.length).toBe(4);
  expect(urlThree.length).toBe(3);
});
