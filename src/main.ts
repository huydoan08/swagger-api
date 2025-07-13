declare const module: {
  hot?: {
    accept(): void;
    dispose(callback: () => void): void;
  };
};

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Cấu hình Swagger
  const config = new DocumentBuilder()
    .setTitle('Product Management API')
    .setDescription('API documentation for Product Management System')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger tại /api

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger documentation is available at: http://localhost:${port}/api`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
      void app.close();
    });
  }
}
void bootstrap();
