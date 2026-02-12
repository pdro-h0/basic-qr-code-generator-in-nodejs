import chalk from "chalk"
import { handle } from "./handle"
import prompt from "prompt";
import { promptCript } from "../../prompts-schema/prompt-crypto";

export const encrypt = async () => {
  prompt.get(promptCript, (err, result) => {
    if (err) throw new Error("Algo deu errado", err)
    console.log(chalk.green("DADOS ENCRIPTADOS"))
    handle(result.encrypt as string)
  });
  prompt.start()
}