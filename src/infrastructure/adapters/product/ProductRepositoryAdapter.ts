import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/core/domain/models";
import { ProductRepository } from "src/core/domain/ports/outbound";
import { ProductEntity } from "src/infrastructure/entities/ProductEntity";
import { Repository } from "typeorm";

@Injectable()
export class ProductRepositoryAdapter implements ProductRepository {

  constructor(
    @InjectRepository(ProductEntity) private repository: Repository<ProductEntity>
  ) { }

  save(product: Product): Promise<Product> {
    return this.repository.save(product)
  }
}
