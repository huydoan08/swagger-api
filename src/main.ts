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

  // Enable CORS for all origins (adjust as needed for production)
  app.enableCors({
    origin: true,
    credentials: true,
  });

  // Cấu hình Swagger
  const config = new DocumentBuilder()
    .setTitle('Product Management API')
    .setDescription('API documentation for Product Management System')
    .setVersion('1.0')
    .addServer('/', 'Local server')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger tại /api

  // Render provides PORT environment variable
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  
  console.log(`🚀 Application is running on: http://localhost:${port}`);
  console.log(`📚 Swagger documentation is available at: http://localhost:${port}/api`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
      void app.close();
    });
  }
}
void bootstrap();
