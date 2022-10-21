import { Local } from "@prisma/client"
import { IsEmail, IsNotEmpty } from "class-validator"

export class CreateProdutorDTO {
  @IsNotEmpty()
  id: number

  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  cnpj: string

  @IsNotEmpty()
  password: string

  local: Omit<Local, 'id'>
}