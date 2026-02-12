import chalk from "chalk";

export const promptQRCode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QRCode"),
  }, {
    name: "type",
    description: chalk.yellow("Escolha entre o tipo de QRCode (1- NORMAL ou (2 TERMINAL"),
    pattern: /^[1-2]+$/,
    message: chalk.red("Escolha apenas 1 ou 2"),
    required: true
  },
]