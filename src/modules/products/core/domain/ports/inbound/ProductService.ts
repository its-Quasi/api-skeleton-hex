import { Product } from "../../models";

export interface IProductService {
  save(product: Product): Promise<Product>
  validateProductPrice(product: Product): boolean
  findByCategoryId(categoryId: string): Promise<Product[]>
}