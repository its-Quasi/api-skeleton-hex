import { Category } from "../../models/Category";

export interface ICategoryService {
  save(category: Category): Promise<Category>
  findById(id: string): Promise<Category>;
  findAll(): Promise<Category[]>;
}