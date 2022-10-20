import { Injectable } from '@nestjs/common';
import { ColetorService } from 'src/users/coletor.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {

  constructor(private readonly coletorService: ColetorService){}

  async validateUser(email: string, password: string) {
    const coletor = await this.coletorService.findByEmail(email)

    if(coletor){
      //senha informada corresponde a hash

      const isPasswordValid = await bcrypt.compare(password, coletor.password)

      if(isPasswordValid){
        return{
          ...coletor,
          password: undefined
        }
      }

    }

    throw new Error("Email ou senha incorretos.")
  }
}
