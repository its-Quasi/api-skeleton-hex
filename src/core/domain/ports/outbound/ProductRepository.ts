import { Product } from "../../models";

export interface ProductRepository {
  save(product: Product): Promise<Product>
}