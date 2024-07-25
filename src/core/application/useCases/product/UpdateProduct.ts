import { Product } from "src/core/domain/entities";

export interface UpdateProduct {
  update(id: number, product: Product): Promise<Product>
}