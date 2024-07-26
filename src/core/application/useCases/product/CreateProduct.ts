import { Product } from "src/core/domain/models";

export interface CreateProduct {
  create(product: Product): Promise<Product>
}