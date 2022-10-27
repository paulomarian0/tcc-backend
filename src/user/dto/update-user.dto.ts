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

  constructor( data: {name: string, email: string, password: string, coletor?:Omit<Coletor, 'id'>, produtor?:Omit<Coletor, 'id'>}) {
    this.name = data.name
    this.email = data.email
    this.password = data.password
    this.coletor = data.coletor
    this.produtor = data.produtor
   }
}