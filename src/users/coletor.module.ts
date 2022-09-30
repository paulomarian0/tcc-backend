import { Module } from '@nestjs/common';
import { UsersService } from './coletor.service';
import { UsersController } from './coletor.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService]
})
export class UsersModule {}
