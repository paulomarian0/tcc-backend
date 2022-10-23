import { Coletor, Produtor } from "@prisma/client"
import { IsEmail, IsNotEmpty } from "class-validator"

export class UpdateUserDTO {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  password: string

  coletor: Omit<Coletor, 'id'>

  produtor: Omit<Produtor, 'id'>
}