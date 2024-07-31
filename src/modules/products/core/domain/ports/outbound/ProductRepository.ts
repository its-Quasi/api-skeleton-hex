import { Product } from "../../models";

export interface ProductRepository {
  save(product: Product): Promise<Product>
  findByCategoryId(categoryId: string): Promise<Product[]>
}