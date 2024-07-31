import { Category } from '../models/Category';
import { ICategoryService } from '../ports/inbound';
import { CategoryRepository } from '../ports/outbound';
import { CategoryRepository } from '../../../../../dist/core/domain/ports/outbound/CategoryRepository';

export class CategoryDomainService implements ICategoryService {

  constructor(

    private repository: CategoryRepository
  ) { }

  save(category: Category): Promise<Category> {
    return this.repository.save(category)
  }


  findById(id: string): Promise<Category> {
    return this.repository.findById(id)
  }
  findAll(): Promise<Category[]> {
    return this.repository.findAll()
  }

}