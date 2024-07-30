import { Product } from 'src/core/domain/models';
import { IProductService } from 'src/core/domain/ports/inbound';

export class CategoryService {

  constructor(private productService: IProductService) { }

  getProductByCategory(categoryId: string): Promise<Product[]> {
    return this.productService.findByCategoryId(categoryId)
  }
}