import { Corrida, Local, Veiculo, User } from "@prisma/client"
import { IsEmail, IsNotEmpty } from "class-validator"

export class CreateProdutorDTO {
  @IsNotEmpty()
  id: number

  local: Omit<Local, 'id'>

  corrida: Omit<Corrida, 'id'>

  veiculo: Omit<Veiculo, 'id'>

  user: Omit<User, 'id'>
}