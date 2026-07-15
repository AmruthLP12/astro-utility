export interface Tool {
  id: string;
  slug: string;

  title: string;
  description: string;

  category: string;

  icon: string;

  featured?: boolean;
  popular?: boolean;
  new?: boolean;
}

export const tools: Tool[] = [
  {
    id: "password-generator",
    slug: "password-generator",

    title: "Password Generator",

    description:
      "Generate secure random passwords with customizable options.",

    category: "security",

    icon: "🔐",

    featured: true,
    popular: true,
    new: true,
  },

  {
    id: "uuid-generator",
    slug: "uuid-generator",

    title: "UUID Generator",

    description:
      "Generate Version 4 UUIDs instantly.",

    category: "developer",

    icon: "🆔",

    popular: true,
  },

  {
    id: "json-formatter",
    slug: "json-formatter",

    title: "JSON Formatter",

    description:
      "Beautify and validate JSON online.",

    category: "Developer",

    icon: "📝",

    featured: true,
  },

  {
    id: "qr-generator",
    slug: "qr-generator",

    title: "QR Code Generator",

    description:
      "Create QR codes for links, text, Wi-Fi and more.",

    category: "Generator",

    icon: "📱",
  },
];