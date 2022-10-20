import { IsEmail, IsNotEmpty } from "class-validator"

export class UpdateProdutorDTO {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

}