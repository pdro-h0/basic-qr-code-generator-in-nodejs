import prompt from "prompt";
import { handle } from "./handle";
import { promptQRCode } from "../../prompts-schema/prompt-qrcode";

export const createQRCode = async () => {
  prompt.get(promptQRCode, handle);
  prompt.start()
}