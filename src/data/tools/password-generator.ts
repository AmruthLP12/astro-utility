// src/data/tools/password-generator.ts

export const passwordGenerator = {
  title: "Random Password Generator",
  slug: "password-generator",

  description:
    "Generate strong, secure, and customizable random passwords online for free.",

  category: "Security",

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Password Generator" },
  ],

  features: [
  {
    title: "Uppercase Letters",
    description: "Include A–Z characters."
  },
  {
    title: "Lowercase Letters",
    description: "Include a–z characters."
  },
  {
    title: "Numbers",
    description: "Include digits 0–9."
  },
  {
    title: "Symbols",
    description: "Include special characters."
  }
],

  faqs: [
    {
      question: "Is this password generator secure?",
      answer:
        "Yes. Passwords are generated locally in your browser and are never sent to a server.",
    },
    {
      question: "Can I choose the password length?",
      answer:
        "Yes. You can generate passwords from 4 to 128 characters.",
    },
    {
      question: "Do you store generated passwords?",
      answer:
        "No. Everything runs locally in your browser.",
    },
  ],

  relatedTools: [
    {
      title: "UUID Generator",
      href: "/tools/uuid-generator",
    },
    {
      title: "Hash Generator",
      href: "/tools/hash-generator",
    },
    {
      title: "Random Username Generator",
      href: "/tools/random-username-generator",
    },
    {
      title: "Password Strength Checker",
      href: "/tools/password-strength-checker",
    },
  ],
};