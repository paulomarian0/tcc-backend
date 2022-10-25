import { Coletor, Produtor } from "@prisma/client"
import { IsEmail, IsJSON, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateUserDTO {

  @IsNumber()
  id: number

  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsString()
  cpf: string

  @IsString()
  password: string

  @IsJSON()
  coletor?: Omit<Coletor, 'id'>

  // produtor: Omit<Produtor, 'id'>

  constructor(data: {name: string, email: string, cpf: string, password: string, coletor?:Omit<Coletor, 'id'>}) {
    this.name = data.name
    this.email = data.email
    this.cpf = data.cpf
    this.password = data.password
    this.coletor = data.coletor
   }
}