import { Product } from "../models";
import { IProductService } from "../ports/inbound";
import { ProductRepository } from "../ports/outbound";
import { BadRequestException } from "@nestjs/common";

export class ProductDomainService implements IProductService {
  constructor(private repository: ProductRepository) { }

  save(product: Product): Promise<Product> {
    if (this.validateProductPrice(product)) {
      return this.repository.save(product)
    }
    throw new BadRequestException('Price must be positive ')
  }

  validateProductPrice(product: Product): boolean {
    console.log(product)
    return product.unitPrice > 0
  }

  findByCategoryId(categoryId: string): Promise<Product[]> {
    return this.repository.findByCategoryId(categoryId)
  }
}