import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateColetorDTO {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  cpf: string

  @IsNotEmpty()
  password: string;

  /* @IsNotEmpty()
  corridaId: number; */
}