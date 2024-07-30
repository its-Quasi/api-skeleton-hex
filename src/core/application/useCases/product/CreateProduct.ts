import { Product } from "src/core/domain/models";
import { CreateProductDto } from "src/infrastructure/dto/product/CreateProductDto";

export interface CreateProduct {
  create(product: CreateProductDto): Promise<Product>
}