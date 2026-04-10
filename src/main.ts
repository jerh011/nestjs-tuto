import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //elimina prpiedades que no se encuntran en los dtos
      forbidNonWhitelisted: true, //en lugar de solo eliminar campos extra, lanza un error si llegan propiedades no permitidas.
      transform: true, //Convierte automáticamente los datos al tipo definido en tu DTO.
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
