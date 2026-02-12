import qr from "qrcode-terminal"
import chalk from "chalk"
import prompt from "prompt"

export const handle = async (error: Error | null, result: prompt.Properties) => {
  if (error) throw new Error("Error on application.")
  const isSmall = result.type == "2";
  qr.generate(result.link as string, { small: isSmall }, qrcode => {
    console.log(chalk.green("QRCode criado com sucesso!\n"))
    console.log(qrcode)
  })
}
