import bcript from "bcryptjs"

export const handle = async (data: string) => {
  console.log(await bcript.hash(data, 10))
}