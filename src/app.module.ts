import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalModule } from './local/local.module';
import { UserModule } from './user/user.module';
import { SchedulesModule } from './schedules/schedules.module';

@Module({
  imports: [ AuthModule, LocalModule, UserModule, SchedulesModule],
  controllers: [AppController],
  providers: [AppService],
  // providers: [AppService, {
  //   provide: APP_GUARD,
  //   useClass: JwtAuthGuard
  // }],
})
export class AppModule {}
