import { Product } from "src/modules/products/core/domain/models";
import { CreateProduct } from "../../useCases/product/CreateProduct";
import { UpdateProduct } from "../../useCases/product/UpdateProduct";
import {
  IProductService,
  ISupplierService,
  ICategoryService
} from "src/modules/products/core/domain/ports/inbound";
import { BadRequestException } from "@nestjs/common";
import { CreateProductDto } from "src/modules/products/infrastructure/dto/product/CreateProductDto";

export class ProductService implements CreateProduct, UpdateProduct {

  constructor(
    private productService: IProductService,
    private categoryService: ICategoryService,
    private supplierService: ISupplierService
  ) { }

  async create(createDto: CreateProductDto): Promise<Product> {
    const { categoryId, supplierId, unitPrice, name } = createDto
    const category = await this.categoryService.findById(categoryId)
    if (!category) {
      throw new BadRequestException('Invalid Category')
    }
    const supplier = await this.supplierService.findById(supplierId)
    if (!supplier) {
      throw new BadRequestException('Invalid Supplier')
    }

    const toSave = new Product(name, categoryId, supplier)
    toSave.unitPrice = unitPrice
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