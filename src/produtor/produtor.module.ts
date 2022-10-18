import { Module } from '@nestjs/common';
import { ProdutorController } from './produtor.controller';
import { PrismaService } from 'src/database/PrismaService';
import { ProdutorService } from './produtor.service';

@Module({
  controllers: [ProdutorController],
  providers: [ProdutorService, PrismaService]
})
export class ProdutorModule {}
