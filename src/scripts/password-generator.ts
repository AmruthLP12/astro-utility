const chars = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

function initPasswordGenerator() {
  const password = document.querySelector<HTMLInputElement>("#password")!;
  const copyBtn = document.querySelector<HTMLButtonElement>("#copyBtn")!;
  const generateBtn = document.querySelector<HTMLButtonElement>("#generateBtn")!;

  const lengthInput = document.querySelector<HTMLInputElement>("#lengthInput")!;
  const lengthSlider = document.querySelector<HTMLInputElement>("#lengthSlider")!;

  const upper = document.querySelector<HTMLInputElement>("#uppercase")!;
  const lower = document.querySelector<HTMLInputElement>("#lowercase")!;
  const numbers = document.querySelector<HTMLInputElement>("#numbers")!;
  const symbols = document.querySelector<HTMLInputElement>("#symbols")!;

  const strengthBar = document.querySelector<HTMLDivElement>("#strengthBar")!;
  const strengthText = document.querySelector<HTMLSpanElement>("#strengthText")!;

  function calculateStrength(length: number, options: number) {
    let score = 0;

    if (length >= 8) score++;
    if (length >= 12) score++;
    if (length >= 16) score++;

    score += options;

    if (score <= 3) {
      strengthText.textContent = "Weak";
      strengthBar.className = "h-full w-1/3 rounded-full bg-red-500";
    } else if (score <= 5) {
      strengthText.textContent = "Medium";
      strengthBar.className = "h-full w-2/3 rounded-full bg-yellow-500";
    } else {
      strengthText.textContent = "Strong";
      strengthBar.className = "h-full w-full rounded-full bg-green-500";
    }
  }

  function updateStrength() {
    const length = Number(lengthInput.value);

    const enabledOptions = [
      upper.checked,
      lower.checked,
      numbers.checked,
      symbols.checked,
    ].filter(Boolean).length;

    calculateStrength(length, enabledOptions);
  }

  function generatePassword() {
    let pool = "";

    if (upper.checked) pool += chars.upper;
    if (lower.checked) pool += chars.lower;
    if (numbers.checked) pool += chars.numbers;
    if (symbols.checked) pool += chars.symbols;

    if (!pool.length) {
      password.value = "";
      updateStrength();
      return;
    }

    const length = Number(lengthInput.value);

    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * pool.length);
      result += pool[randomIndex];
    }

    password.value = result;

    updateStrength();
  }

  // Sync slider -> number
  lengthSlider.addEventListener("input", () => {
    lengthInput.value = lengthSlider.value;
    updateStrength();
  });

  // Sync number -> slider
  lengthInput.addEventListener("input", () => {
    let value = Number(lengthInput.value);

    if (value < 4) value = 4;
    if (value > 128) value = 128;

    lengthInput.value = String(value);
    lengthSlider.value = String(value);

    updateStrength();
  });

  // Update strength only
  upper.addEventListener("change", updateStrength);
  lower.addEventListener("change", updateStrength);
  numbers.addEventListener("change", updateStrength);
  symbols.addEventListener("change", updateStrength);

  // Generate password
  generateBtn.addEventListener("click", generatePassword);

  // Copy password
  copyBtn.addEventListener("click", async () => {
    if (!password.value) return;

    await navigator.clipboard.writeText(password.value);

    const original = copyBtn.textContent;

    copyBtn.textContent = "Copied!";

    setTimeout(() => {
      copyBtn.textContent = original;
    }, 1500);
  });

  // Initial state
  password.value = "";
  updateStrength();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPasswordGenerator);
} else {
  initPasswordGenerator();
}