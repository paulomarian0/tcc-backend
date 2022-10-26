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

  @IsJSON()
   produtor: Omit<Produtor, 'id'>

  constructor(data: {name: string, email: string, cpf: string, password: string, coletor?:Omit<Coletor, 'id'>, produtor?:Omit<Coletor, 'id'>}) {
    this.name = data.name || undefined
    this.email = data.email || undefined
    this.cpf = data.cpf || undefined
    this.password = data.password || undefined
    this.coletor = data.coletor || undefined
    this.produtor = data.produtor || undefined
   }
}