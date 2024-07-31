import { Body, Controller, Inject, Post } from "@nestjs/common";
import { CreateProduct } from "src/modules/products/core/application/useCases/product/CreateProduct";
import { UpdateProduct } from "src/modules/products/core/application/useCases/product/UpdateProduct";
import { PRODUCT_APPLICATION } from "src/modules/products/core/core.module";
import { CreateProductDto } from "../dto/product/CreateProductDto";

type ProductAppType = UpdateProduct & CreateProduct
@Controller("products")
export class ProductController {
  constructor(
    @Inject(PRODUCT_APPLICATION) private service: ProductAppType
  ) { }

  @Post()
  createProduct(@Body() product: CreateProductDto) {
    return this.service.create(product)
  }
}
