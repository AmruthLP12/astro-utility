// src/data/tools/word-to-password-generator.ts

export const wordToPasswordGenerator = {
  title: "Word to Password Generator",
  slug: "word-to-password-generator",

  description:
    "Convert words or phrases into strong, memorable passwords using smart letter substitutions, numbers, symbols, and customizable options.",

  category: "Security",

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Word to Password Generator" },
  ],

  features: [
    {
      title: "Smart Letter Substitutions",
      description:
        "Replace letters with numbers and symbols, such as A → @, E → 3, O → 0, and S → $.",
    },
    {
      title: "Random Capitalization",
      description:
        "Randomly capitalize characters to create stronger and less predictable passwords.",
    },
    {
      title: "Symbols & Numbers",
      description:
        "Optionally insert special characters and numbers while keeping the password easy to remember.",
    },
    {
      title: "Prefix & Suffix Support",
      description:
        "Add random prefixes or suffixes for extra security without losing memorability.",
    },
    {
      title: "Multiple Password Variations",
      description:
        "Generate several unique password suggestions from the same word or phrase.",
    },
    {
      title: "100% Browser Based",
      description:
        "Your text never leaves your device. Everything is generated locally in your browser.",
    },
  ],

  faqs: [
    {
      question: "How does the Word to Password Generator work?",
      answer:
        "The tool converts your word or phrase into a stronger password by replacing letters with numbers or symbols, applying capitalization, and optionally adding random characters.",
    },
    {
      question: "Is my text uploaded or stored?",
      answer:
        "No. Everything runs entirely in your browser. Your input is never uploaded, stored, or shared.",
    },
    {
      question: "Can I customize the generated password?",
      answer:
        "Yes. You can choose which substitutions to use, enable or disable symbols and numbers, control capitalization, and add prefixes or suffixes.",
    },
    {
      question: "Is this better than a random password?",
      answer:
        "Random passwords are generally more secure. This tool is designed to create passwords that are both stronger than plain words and easier to remember than completely random strings.",
    },
  ],

  relatedTools: [
    {
      title: "Random Password Generator",
      href: "/tools/password-generator",
    },
    {
      title: "Password Strength Checker",
      href: "/tools/password-strength-checker",
    },
    {
      title: "Random Username Generator",
      href: "/tools/random-username-generator",
    },
    {
      title: "Hash Generator",
      href: "/tools/hash-generator",
    },
  ],
};