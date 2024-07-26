import { Body, Controller, Post } from "@nestjs/common";
import { ProductService } from "src/core/application/services/product/ProductService";

@Controller('products')
export class ProductController {
  constructor(private service: ProductService) { }

  @Post()
  createProduct(@Body() request: any) {
    return this.service.create(request)
  }
}
