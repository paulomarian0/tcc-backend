import { Module } from '@nestjs/common';
import { ColetorService } from './coletor.service';
import { UsersController } from './coletor.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [UsersController],
  providers: [ColetorService, PrismaService]
})
export class UsersModule {}
