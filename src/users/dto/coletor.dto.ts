import { IsEmail, IsNotEmpty } from "class-validator";

export class ColetorDTO {
  @IsNotEmpty()
  id: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  name: string;

/*   @IsNotEmpty()
  cpf: string; */

  @IsNotEmpty()
  password: string;

  /* @IsNotEmpty()
  corridaId: number; */
}