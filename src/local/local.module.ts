import { Module } from '@nestjs/common';
import { LocalService } from './local.service';
import { LocalController } from './local.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [LocalController],
  providers: [LocalService, PrismaService],

})
export class LocalModule {}
