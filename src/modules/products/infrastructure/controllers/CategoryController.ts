import { Body, Controller, Get, Inject, Param, Post } from "@nestjs/common";
import { CATEGORY_SERVICE, PRODUCT_SERVICE } from "src/modules/products/core/core.module";
import { ICategoryService, IProductService } from "src/modules/products/core/domain/ports/inbound";
import { CreateCategoryDto } from "../dto/category/CreateCategoryDto";

@Controller("category")
export class CategoryController {

  constructor(
    @Inject(PRODUCT_SERVICE) private productService: IProductService,
    @Inject(CATEGORY_SERVICE) private categoryService: ICategoryService
  ) { }

  @Get(":categoryId")
  getProductsByCategoryId(@Param() params: any) {
    const { categoryId } = params
    return this.productService.findByCategoryId(categoryId)
  }

  @Post()
  create(@Body() category: CreateCategoryDto) {
    return this.categoryService.
  }
}