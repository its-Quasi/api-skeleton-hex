import { Category } from '../models/Category';
import { ICategoryService } from '../ports/inbound';
import { CategoryRepository } from '../ports/outbound';

export class CategoryDomainService implements ICategoryService {

  constructor(

    private repository: CategoryRepository
  ) { }

  findById(id: string): Promise<Category> {
    return this.repository.findById(id)
  }
  findAll(): Promise<Category[]> {
    return this.repository.findAll()
  }

}