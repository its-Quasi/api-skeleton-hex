import { Category } from "../../entities/Category";

export interface CategoryService {
  findById(id: string): Promise<Category>;
  findAll(): Promise<Category[]>;
}