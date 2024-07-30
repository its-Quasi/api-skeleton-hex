import { Module } from '@nestjs/common';
import {
  CategoryController,
  ProductController,
  SupplierController
} from './controllers';
import { CoreModule } from 'src/core/core.module';
import { CategoryMongoRepositoryAdapter } from './adapters/category/mongoRepository.adapter';
import { ProductRepositoryAdapter } from './adapters/product/ProductRepositoryAdapter';
import { SupplierRepositoryAdapter } from './adapters/supplier/SupplierRepositoryAdapter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryEntity, CategorySchema } from './entities/CategoryEntity';
import { SupplierEntity } from './entities/SupplierEntity';
import { ProductEntity } from './entities/ProductEntity';

@Module({
  imports: [
    CoreModule.register({
      modules: [InfrastructureModule],
      adapters: {
        categoryRepository: CategoryMongoRepositoryAdapter,
        productRepository: ProductRepositoryAdapter,
        supplierRepository: SupplierRepositoryAdapter
      }
    }),
    TypeOrmModule.forFeature([
      ProductEntity,
      SupplierEntity
    ]),
    MongooseModule.forFeature([
      { name: CategoryEntity.name, schema: CategorySchema }
    ])
  ],
  controllers: [
    CategoryController,
    SupplierController,
    ProductController
  ],
  providers: [
    CategoryMongoRepositoryAdapter,
    ProductRepositoryAdapter,
    SupplierRepositoryAdapter
  ],
  exports: [
    CategoryMongoRepositoryAdapter,
    ProductRepositoryAdapter,
    SupplierRepositoryAdapter
  ]
})
export class InfrastructureModule { }
