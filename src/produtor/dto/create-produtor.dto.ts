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

  corridaId: number
}