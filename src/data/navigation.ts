import CodeIcon from "@tabler/icons/outline/code.svg";
import CalculatorIcon from "@tabler/icons/outline/calculator.svg";
import BoltIcon from "@tabler/icons/outline/bolt.svg";
import ArrowsExchangeIcon from "@tabler/icons/outline/arrows-exchange.svg";
import PencilIcon from "@tabler/icons/outline/pencil.svg";  
import ShieldIcon from "@tabler/icons/outline/shield.svg";

export const navigation = [
  {
    title: "Security",
    icon: ShieldIcon,
    items: [
      {
        title: "Password Generator",
        href: "/tools/password-generator",
      },
      {
        title: "Word to Password Generator",
        href: "/tools/word-to-password-generator",
      },
    ],
  },

  {
    title: "Developer",
    icon: CodeIcon,
    items: [
      {
        title: "JSON Formatter",
        href: "/tools/json-formatter",
      },
      {
        title: "UUID Generator",
        href: "/tools/uuid-generator",
      },
    ],
  },

  {
    title: "Text",
    icon: PencilIcon,
    items: [],
  },

  {
    title: "Converters",
    icon: ArrowsExchangeIcon,
    items: [],
  },

  {
    title: "Generators",
    icon: BoltIcon,
    items: [],
  },

  {
    title: "Calculators",
    icon: CalculatorIcon,
    items: [],
  },
];