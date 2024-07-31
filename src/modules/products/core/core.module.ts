import { DynamicModule, Module, Type } from '@nestjs/common';
import { CategoryRepository, ProductRepository, SupplierRepository } from './domain/ports/outbound';
import { ProductDomainService } from './domain/services/ProductDomainService';
import { CategoryDomainService } from './domain/services/CategoryDomainService';
import { SupplierDomainService } from './domain/services/SupplierDomainService';
import { ProductService } from './application/services/product/ProductService';


export type CoreModuleOptions = {
  modules: Type[];
  adapters?: {
    productRepository: Type<ProductRepository>;
    categoryRepository: Type<CategoryRepository>;
    supplierRepository: Type<SupplierRepository>;
  }
}

//TOKENS FOR PROVIDERS
export const PRODUCT_APPLICATION = 'PRODUCT_APPLICATION'
export const CATEGORY_SERVICE = 'CATEGORY_SERVICE'
export const PRODUCT_SERVICE = 'PRODUCT_SERVICE'
export const SUPPLIER_SERVICE = 'SUPPLIER_SERVICE'

@Module({})
export class CoreModule {

  public static register({ modules, adapters }: CoreModuleOptions): DynamicModule {

    //RECIBO LOS PARAMETROS DEL MODULO QUE ME INVOCA [implementaciones de los repositorios]
    const { categoryRepository, productRepository, supplierRepository } = adapters

    const ProductApplicationProvider = {
      provide: PRODUCT_APPLICATION,
      useFactory(product: ProductDomainService, category: CategoryDomainService, supplier: SupplierDomainService) {
        return new ProductService(product, category, supplier)
      },
      inject: [
        PRODUCT_SERVICE,
        CATEGORY_SERVICE,
        SUPPLIER_SERVICE
      ]
    }

    const CategoryServiceProvider = {
      provide: CATEGORY_SERVICE,
      useFactory(repository: CategoryRepository) {
        return new CategoryDomainService(repository)
      },
      inject: [categoryRepository]
    }

    const SupplierServiceProvider = {
      provide: SUPPLIER_SERVICE,
      useFactory(repository: SupplierRepository) {
        return new SupplierDomainService(repository)
      },
      inject: [supplierRepository]
    }

    const ProductServiceProvider = {
      provide: PRODUCT_SERVICE,
      useFactory(repository: ProductRepository) {
        return new ProductDomainService(repository)
      },
      inject: [productRepository]
    }

    return {
      module: CoreModule,
      imports: [...modules],
      providers: [
        ProductApplicationProvider,
        CategoryServiceProvider,
        SupplierServiceProvider,
        ProductServiceProvider,
      ],
      exports: [
        PRODUCT_APPLICATION,
        PRODUCT_SERVICE,
        CATEGORY_SERVICE
      ]
    }
  }

}
