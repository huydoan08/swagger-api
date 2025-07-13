import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/products/product.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [ProductModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
