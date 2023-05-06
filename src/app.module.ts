import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { CatalogueModule } from './catalogue/catalogue.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, OrderModule, CatalogueModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
