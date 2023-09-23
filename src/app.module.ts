import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { FovoritesModule } from './fovorites/fovorites.module';
import { BasketsModule } from './baskets/baskets.module';
import { PaymentsModule } from './payments/payments.module';
import { VendersModule } from './venders/venders.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/orders.module';
import { CategoryModule } from './category/category.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [UsersModule, AdminModule, ProductsModule, AuthModule, FovoritesModule, BasketsModule, PaymentsModule, VendersModule,SharedModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/sello'), OrdersModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
