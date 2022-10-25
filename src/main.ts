import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3333;
  app.enableCors();
  await app.listen(port);
  console.log(`Running in port ${port}`)
}
bootstrap();
