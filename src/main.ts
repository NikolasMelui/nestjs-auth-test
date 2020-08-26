import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('Car Service API')
    .setDescription('An API for the car service')
    .setVersion('0.3.0')
    .addTag('car_service_api')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.APPLICATION_PORT || 3000);
}
bootstrap();
