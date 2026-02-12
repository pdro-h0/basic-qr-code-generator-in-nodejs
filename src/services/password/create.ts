import chalk from "chalk"
import { handle } from "./handle"

export const createPassword = async () => {
  console.log(chalk.green("PASSWORD"))
  const password = await handle()
  console.log(password)
}