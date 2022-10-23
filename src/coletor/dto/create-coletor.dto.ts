import { Corrida, User, Veiculo } from "@prisma/client";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateColetorDTO {
  @IsNotEmpty()
  id: number;

  veiculo: Omit<Veiculo, 'id'>

  corrida: Omit<Corrida, 'id'>

  user: Omit<User, 'id'>

  /* @IsNotEmpty()
  corridaId: number; */
}