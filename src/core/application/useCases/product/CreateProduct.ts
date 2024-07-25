import { Product } from "src/core/domain/entities";

export interface CreateProduct {
  create(product: Product): Promise<Product>
}