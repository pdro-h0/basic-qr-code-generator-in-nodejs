import { permitterCharacters } from "./utils/permitted-characters";

export const handle = async () => {
  let characters = [];
  let password = "";
  const passwordLength = Number(process.env.PASSWORD_LENGTH as unknown as number);
  characters = await permitterCharacters()

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }
  return password
}