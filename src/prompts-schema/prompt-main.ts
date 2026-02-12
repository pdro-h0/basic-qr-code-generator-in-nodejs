import chalk from "chalk";

export const mainPrompt = [
  {
    name: "Select",
    description: chalk.yellow("Escolha a ferramenta (1 - QRCode | 2 - Password | 3 - Encriptar)"),
    pattern: /^[1-3]+$/,
    message: chalk.red("Escolha apenas de 1 a 3"),
    required: true
  }
]