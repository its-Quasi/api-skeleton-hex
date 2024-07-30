import { Controller, Get, Inject, Param } from "@nestjs/common";
import { PRODUCT_SERVICE } from "src/core/core.module";
import { IProductService } from "src/core/domain/ports/inbound";

@Controller("category")
export class CategoryController {

  constructor(
    @Inject(PRODUCT_SERVICE) private productService: IProductService
  ) { }

  @Get(":categoryId")
  getProductsByCategoryId(@Param() params: any) {
    const { categoryId } = params
    return this.productService.findByCategoryId(categoryId)
  }
}