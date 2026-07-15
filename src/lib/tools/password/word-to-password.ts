// src/lib/tools/password/word-to-password.ts

export interface GeneratorOptions {
  count?: number;
  addNumbers?: boolean;
  addSymbols?: boolean;
  randomCaps?: boolean;
  addPrefix?: boolean;
  addSuffix?: boolean;
}

const substitutions: Record<string, string[]> = {
  a: ["@", "4"],
  b: ["8"],
  e: ["3"],
  g: ["6", "9"],
  i: ["1", "!"],
  l: ["1"],
  o: ["0"],
  s: ["$", "5"],
  t: ["7", "+"],
  z: ["2"],
};

const symbols = ["!", "@", "#", "$", "%", "&", "*", "?"];

const prefixes = ["@", "#", "$", "_", "!"];

function randomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function randomNumber(length = 2) {
  return Array.from({ length }, () =>
    Math.floor(Math.random() * 10)
  ).join("");
}

function toCamelCase(text: string) {
  return text
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map((word, index) =>
      index === 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

function substituteLetters(word: string) {
  return [...word]
    .map((char) => {
      const lower = char.toLowerCase();

      // Only replace around half of eligible characters
      if (substitutions[lower] && Math.random() > 0.5) {
        return randomItem(substitutions[lower]);
      }

      return char;
    })
    .join("");
}

function randomCapitalize(str: string) {
  return [...str]
    .map((char) => {
      if (!/[a-z]/i.test(char)) return char;

      return Math.random() > 0.8
        ? char.toUpperCase()
        : char;
    })
    .join("");
}

export function generatePasswords(
  input: string,
  options: GeneratorOptions = {},
) {
  const {
    count = 8,
    addNumbers = true,
    addSymbols = true,
    randomCaps = true,
    addPrefix = false,
    addSuffix = true,
  } = options;

  const base = toCamelCase(input);

  if (!base) return [];

  const passwords = new Set<string>();

  let attempts = 0;

  while (passwords.size < count && attempts < count * 20) {
    attempts++;

    let password = substituteLetters(base);

    if (randomCaps) {
      password = randomCapitalize(password);
    }

    if (addPrefix && Math.random() > 0.5) {
      password = randomItem(prefixes) + password;
    }

    if (addSuffix) {
      if (addSymbols && Math.random() > 0.4) {
        password += randomItem(symbols);
      }

      if (addNumbers && Math.random() > 0.4) {
        password += randomNumber(2);
      }
    }

    passwords.add(password);
  }

  return [...passwords];
}