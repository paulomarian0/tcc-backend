import { Coletor, Produtor } from "@prisma/client"
import { IsEmail, IsJSON,  IsNumber, IsString } from "class-validator"

export class UpdateUserDTO {
  @IsNumber()
  id: number

  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsString()
  password: string

  @IsJSON()
  coletor?: Omit<Coletor, 'id'>

  @IsJSON()
  produtor?: Omit<Produtor, 'id'>

}