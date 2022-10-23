import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { User } from '@prisma/client';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly JwtService: JwtService) { }


  login(user: User): UserToken {
    //transforma user em JWT
    const payload: UserPayload = {
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
    const user = await this.userService.findByEmail(email)

    if (user) {
      //senha informada corresponde a hash

      const isPasswordValid = await bcrypt.compare(password, user.password)

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined
        }
      }

    }

    throw new Error("Email ou senha incorretos.")
  }
}
