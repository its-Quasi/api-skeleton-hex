import { Category } from "../../models";

export interface CategoryRepository {
  save(category: Category): Promise<Category>
  findById(id: string): Promise<Category>;
  findAll(): Promise<Category[]>
}