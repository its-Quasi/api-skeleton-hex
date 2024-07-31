import { Product } from "src/modules/products/core/domain/models";

export interface UpdateProduct {
  update(id: number, product: Product): Promise<Product>
}