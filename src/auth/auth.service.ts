import { Injectable } from '@nestjs/common';
import { ColetorService } from 'src/users/coletor.service';
import * as bcrypt from 'bcrypt'
import { Coletor } from '@prisma/client';
import { ColetorPayload } from './models/ColetorPayload';
import { JwtService } from '@nestjs/jwt';
import { ColetorToken } from './models/ColetorToken';

@Injectable()
export class AuthService {
  constructor(
    private readonly coletorService: ColetorService, 
    private readonly JwtService: JwtService){}
  
  
  login(user: Coletor) : ColetorToken {
    //transforma user em JWT
    const payload: ColetorPayload = {
      sub: user.id,
      email: user.email,
      name: user.name
    }

    const jwtToken = this.JwtService.sign(payload)

    return {
      access_token: jwtToken
    }
  }

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
