import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://nuka-store.vercel.app', 'http://localhost:5173'],
    credentials: true,
    allowedHeaders: '*',
  });
  await app.listen(3000);
}
bootstrap();
