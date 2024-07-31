import { Product } from "src/modules/products/core/domain/models";
import { CreateProductDto } from "src/modules/products/infrastructure/dto/product/CreateProductDto";

export interface CreateProduct {
  create(product: CreateProductDto): Promise<Product>
}