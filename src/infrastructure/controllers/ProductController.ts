import { Body, Controller, Inject, Post } from "@nestjs/common";
// import { ProductService } from "src/core/application/services/product/ProductService";
import { CreateProduct } from "src/core/application/useCases/product/CreateProduct";
import { UpdateProduct } from "src/core/application/useCases/product/UpdateProduct";
import { PRODUCT_APPLICATION } from "src/core/core.module";
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
