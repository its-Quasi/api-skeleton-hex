import { Module } from '@nestjs/common';
import {
  CategoryController,
  ProductController,
  SupplierController
} from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/ProductEntity';
import { SupplierEntity } from './entities/SupplierEntity';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryEntity, CategorySchema } from './entities/CategoryEntity';
import { CoreModule } from 'src/core/core.module';
// import { ProductRepositoryAdapter } from './adapters/product/ProductRepositoryAdapter';

@Module({
  imports: [
    CoreModule
    // TypeOrmModule.forFeature([
    //   ProductEntity,
    //   SupplierEntity
    // ]),
    // MongooseModule.forFeature([
    //   { name: CategoryEntity.name, schema: CategorySchema }
    // ])
  ],
  providers: [

  ],
  exports: [

  ],
  controllers: [
    CategoryController,
    SupplierController,
    ProductController
  ]
})
export class InfrastructureModule { }
