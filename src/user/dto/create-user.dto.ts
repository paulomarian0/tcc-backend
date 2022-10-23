import { Coletor, Produtor } from "@prisma/client"
import { IsEmail, IsNotEmpty } from "class-validator"

export class CreateUserDTO {
  @IsNotEmpty()
  id: number

  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  cpf: string

  @IsNotEmpty()
  password: string

  coletor?: Omit<Coletor, 'id'>

  // produtor: Omit<Produtor, 'id'>
}