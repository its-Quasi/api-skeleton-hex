import { Product } from "src/core/domain/models";

export interface UpdateProduct {
  update(id: number, product: Product): Promise<Product>
}