import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColetorModule } from './users/coletor.module';
import { ProdutorModule } from './produtor/produtor.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalModule } from './local/local.module';
import { CorridaModule } from './corrida/corrida.module';
import { VeiculoModule } from './veiculo/veiculo.module';

@Module({
  imports: [ColetorModule, ProdutorModule, AuthModule, LocalModule, CorridaModule, VeiculoModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard
  }],
})
export class AppModule {}
