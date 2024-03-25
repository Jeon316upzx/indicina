export const encodeUrl = (keyLength: number): string => {
  let salt = keyLength || 4;

  let result = "";
  for (let i = 0; i < salt; i++) {
    let char = generateRandomChar();
    if (char !== null) {
      result += char;
    }
  }
  return result;
};

const getAllCharacters = (): string[] => {
  const lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseAlphabets = lowerCaseAlphabets.toUpperCase();
  const numericalDigits = "0123456789";
  const chars = (
    lowerCaseAlphabets +
    upperCaseAlphabets +
    numericalDigits
  ).split("");
  return shuffle(chars);
};

const getRandomIndex = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomChar = (): string => {
  const characters = getAllCharacters();
  const index = getRandomIndex(0, characters.length);
  return characters[index];
};

// Implementation of Fisher Yates Shuffle Algorithm
// @src -> https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a: string[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
