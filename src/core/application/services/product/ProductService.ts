import { Product } from "src/core/domain/models";
import { CreateProduct } from "../../useCases/product/CreateProduct";
import { UpdateProduct } from "../../useCases/product/UpdateProduct";
import {
  IProductService,
  ISupplierService,
  ICategoryService
} from "src/core/domain/ports/inbound";
import { BadRequestException } from "@nestjs/common";

export class ProductService implements CreateProduct, UpdateProduct {

  constructor(
    private productService: IProductService,
    private categoryService: ICategoryService,
    private supplierService: ISupplierService
  ) { }

  async create(product: Product): Promise<Product> {
    console.log(product)
    const { id: categoryId } = product.category
    const { id: supplierId } = product.supplier
    const category = await this.categoryService.findById(categoryId)
    if (!category) {
      throw new BadRequestException('Invalid Category')
    }
    const supplier = await this.supplierService.findById(supplierId)
    if (!supplier) {
      throw new BadRequestException('Invalid Supplier')
    }

    const toSave = new Product("name", category, supplier)
    return this.productService.save(toSave)
  }

  update(id: number, product: Product): Promise<Product> {
    if (id) {
      return new Promise(
        () => setTimeout(() => product, 1000)
      )
    }
    throw new Error("Method not implemented.");
  }

}