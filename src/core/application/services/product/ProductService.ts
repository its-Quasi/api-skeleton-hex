import { Product } from "src/core/domain/entities";
import { CreateProduct } from "../../useCases/product/CreateProduct";
import { UpdateProduct } from "../../useCases/product/UpdateProduct";

export class ProductService implements CreateProduct, UpdateProduct {

  //Proof methods 

  update(id: number, product: Product): Promise<Product> {
    if (id) {
      return new Promise(
        () => setTimeout(() => product, 1000)
      )
    }
    throw new Error("Method not implemented.");
  }


  create(product: Product): Promise<Product> {
    return new Promise(
      () => setTimeout(() => product, 1000)
    )
  }
}