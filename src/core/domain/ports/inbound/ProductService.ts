import { Product } from "../../entities";

export interface IProductService {
  save(product: Product): Promise<Product>
  validateProductPrice(product: Product): boolean
}