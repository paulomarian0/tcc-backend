import {  Local ,User } from "@prisma/client"
import { IsEmail, IsNotEmpty } from "class-validator"

export class CreateProdutorDTO {
  @IsNotEmpty()
  id: number

  local: Omit<Local, 'id'>

//  corrida: Omit<Corrida, 'id'>



  user: Omit<User, 'id'>
}