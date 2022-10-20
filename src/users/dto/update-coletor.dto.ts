import { IsEmail, IsNotEmpty } from "class-validator";

export class UpdateColetorDTO {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  /* @IsNotEmpty()
  corridaId: number; */
}