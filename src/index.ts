import prompt from "prompt"
import { createQRCode } from "./services/qrcode/create"
import { createPassword } from "./services/password/create"
import { mainPrompt } from "./prompts-schema/prompt-main"
import { encrypt } from "./services/crypt/create"

(async function main() {
  prompt.get(mainPrompt, async (err, result) => {
    if (err) throw new Error("Algo deu errado", err)
    if (result.Select == '1') await createQRCode()
    if (result.Select == '2') await createPassword()
    if (result.Select == '3') await encrypt()
  })
  prompt.start()
})()