import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { ColetorModule } from 'src/coletor/coletor.module';
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [ColetorModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions:{expiresIn: '30m'}
  })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule { }
