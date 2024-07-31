import { Module } from '@nestjs/common';
import { InfrastructureModule } from './modules/products/infrastructure/infrastructure.module';
import { CoreModule } from './modules/products/core/core.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierEntity } from './modules/products/infrastructure/entities/SupplierEntity';
import { ProductEntity } from './modules/products/infrastructure/entities/ProductEntity';
@Module({
  imports: [
    CoreModule,
    InfrastructureModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'products',
      synchronize: true,
      autoLoadEntities: true,
      entities: [SupplierEntity, ProductEntity]
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/categories')
  ],
})
export class AppModule { }
