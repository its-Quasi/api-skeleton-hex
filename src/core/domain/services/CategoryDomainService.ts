import { Category } from '../models/Category';
import { CategoryService } from '../ports/inbound';
import { CategoryRepository } from '../ports/outbound';

export class CategoryDomainService implements CategoryService {

  constructor(private readonly repository: CategoryRepository) { }

  findById(id: string): Promise<Category> {
    return this.repository.findById(id)
  }
  findAll(): Promise<Category[]> {
    return this.repository.findAll()
  }

}