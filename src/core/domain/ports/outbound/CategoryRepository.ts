import { Category } from "../../models";

export interface CategoryRepository {
  findById(id: string): Promise<Category>;
  findAll(): Promise<Category[]>
}