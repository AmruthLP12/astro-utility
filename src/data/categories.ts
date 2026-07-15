export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: "security",
    name: "Security",
    slug: "security",
    icon: "🔐",
    description: "Password, hashing and encryption tools.",
  },
  {
    id: "developer",
    name: "Developer",
    slug: "developer",
    icon: "💻",
    description: "Developer utilities and coding tools.",
  },
  {
    id: "text",
    name: "Text",
    slug: "text",
    icon: "📝",
    description: "Text formatting and editing tools.",
  },
  {
    id: "converter",
    name: "Converter",
    slug: "converter",
    icon: "🔄",
    description: "Convert files, units and formats.",
  },
  {
    id: "generator",
    name: "Generator",
    slug: "generator",
    icon: "⚡",
    description: "Generate random values and content.",
  },
  {
    id: "calculator",
    name: "Calculator",
    slug: "calculator",
    icon: "🧮",
    description: "Everyday calculators and utilities.",
  },
];