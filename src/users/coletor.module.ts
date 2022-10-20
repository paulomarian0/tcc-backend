import { Module } from '@nestjs/common';
import { ColetorService } from './coletor.service';
import { ColetorController } from './coletor.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [ColetorController],
  providers: [ColetorService, PrismaService],
  exports:[ColetorService]
})
export class ColetorModule {}
