import { Module } from '@nestjs/common';
import {
  CategoryController,
  ProductController,
  SupplierController
} from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/ProductEntity';
import { SupplierEntity } from './entities/SupplierEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductEntity,
      SupplierEntity
    ])
  ],
  controllers: [
    CategoryController,
    SupplierController,
    ProductController
  ]
})
export class InfrastructureModule { }
