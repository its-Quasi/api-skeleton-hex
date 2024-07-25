import { Product } from "../entities";
import { ProductService } from "../ports/inbound";
import { ProductRepository } from "../ports/outbound";
import { BadRequestException } from "@nestjs/common";

export class ProductDomainService implements ProductService {
  constructor(private repository: ProductRepository) { }

  save(product: Product): Promise<Product> {
    if (this.validateProductPrice(product)) {
      return this.repository.save(product)
    }
    throw new BadRequestException('Price must be positive')
  }

  validateProductPrice(product: Product): boolean {
    return product.unitPrice > 0
  }
}