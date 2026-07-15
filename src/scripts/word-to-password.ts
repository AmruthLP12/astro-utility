import { generatePasswords } from "src/lib/tools/password/word-to-password";

function initWordToPassword() {
  const word =
    document.querySelector<HTMLInputElement>("#word");

  const numbers =
    document.querySelector<HTMLInputElement>("#numbers");

  const symbols =
    document.querySelector<HTMLInputElement>("#symbols");

  const caps =
    document.querySelector<HTMLInputElement>("#caps");

  const prefix =
    document.querySelector<HTMLInputElement>("#prefix");

  const button =
    document.querySelector<HTMLButtonElement>("#generateBtn");

  const results =
    document.querySelector<HTMLDivElement>("#results");

  if (
    !word ||
    !numbers ||
    !symbols ||
    !caps ||
    !prefix ||
    !button ||
    !results
  ) {
    console.warn("WordToPasswordGenerator: Missing elements.");
    return;
  }

  button.addEventListener("click", () => {
    const input = word.value.trim();

    if (!input) {
      results.innerHTML = `
        <div class="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
          Enter a word or phrase to generate passwords.
        </div>
      `;
      return;
    }

    const passwords = generatePasswords(input, {
      addNumbers: numbers.checked,
      addSymbols: symbols.checked,
      randomCaps: caps.checked,
      addPrefix: prefix.checked,
    });

    results.innerHTML = passwords
      .map(
        (password) => `
        <div class="flex items-center justify-between rounded-lg border bg-card p-4">
          <code class="font-mono text-base">${password}</code>

          <button
            class="copy-btn rounded-md border px-3 py-1 text-sm transition hover:bg-accent"
            data-password="${password}"
          >
            Copy
          </button>
        </div>
      `
      )
      .join("");
  });

  results.addEventListener("click", async (event) => {
    const target = event.target as HTMLElement;

    const button = target.closest<HTMLButtonElement>(".copy-btn");

    if (!button) return;

    const password = button.dataset.password;

    if (!password) return;

    await navigator.clipboard.writeText(password);

    const original = button.textContent;

    button.textContent = "Copied!";

    setTimeout(() => {
      button.textContent = original;
    }, 1500);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initWordToPassword);
} else {
  initWordToPassword();
}