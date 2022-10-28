import { Coletor, Produtor, User } from "@prisma/client";
import { CreateUserDTO } from "../dto/create-user.dto";
import * as bcrypt from 'bcrypt'

export class UserMapper {
  public static async createToDatabase(user: CreateUserDTO) {
    return {
      name: user.name,
      email: user.email,
      cpf: user.cpf,
      password: await bcrypt.hash(user.password, 10),
      coletor: user.coletor,
      produtor: user.produtor
    }
  }

  public static fromDatabase(user: User & { coletor: Coletor; produtor: Produtor; }) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      cpf: user.cpf,
      coletor: user.coletor || undefined,
      produtor: user.produtor || undefined
    }
  }
}