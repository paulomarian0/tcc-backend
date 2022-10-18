import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/coletor.module';
import { ProdutorModule } from './produtor/produtor.module';

@Module({
  imports: [UsersModule, ProdutorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}