import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/modules/products/core/domain/models";
import { ProductRepository } from "src/modules/products/core/domain/ports/outbound";
import { ProductEntity } from "src/modules/products/infrastructure/entities/ProductEntity";
import { Repository } from "typeorm";

@Injectable()
export class ProductRepositoryAdapter implements ProductRepository {

  constructor(
    @InjectRepository(ProductEntity) private repository: Repository<ProductEntity>
  ) { }

  findByCategoryId(categoryId: string): Promise<Product[]> {
    return this.repository.find({
      where: { categoryId }
    })
  }

  save(product: Product): Promise<Product> {
    return this.repository.save(product)
  }


}
