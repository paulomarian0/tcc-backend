import { Coletor, Produtor } from "@prisma/client"
import { IsEmail, IsJSON, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateUserDTO {
  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsString()
  cpf: string

  @IsString()
  password: string

  coletor?: { userId: number }

  produtor?: {
    local: {
      tipoLixo: string
      latitude: string
      longitude: string
    }
  }
}