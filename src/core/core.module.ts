import { Module } from '@nestjs/common';
import { ProductService } from './application/services/product/ProductService';
import { CategoryDomainService } from './domain/services/CategoryDomainService';
import { SupplierDomainService } from './domain/services/SupplierDomainService';
import { CategoryMongoRepositoryAdapter } from 'src/infrastructure/adapters/category/mongoRepository.adapter';

@Module({

  providers: [
    ProductService,
    CategoryDomainService,
    SupplierDomainService
  ],
  exports: [
    ProductService
  ]
})
export class CoreModule { }
