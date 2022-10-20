import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColetorModule } from './users/coletor.module';
import { ProdutorModule } from './produtor/produtor.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ColetorModule, ProdutorModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
