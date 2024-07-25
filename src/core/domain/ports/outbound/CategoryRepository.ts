import { Category } from "../../entities";

export interface CategoryRepository {
  findById(id: string): Promise<Category>;
  findAll(): Promise<Category[]>
}