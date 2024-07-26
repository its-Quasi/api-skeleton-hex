import { Category } from "../../models/Category";

export interface ICategoryService {
  findById(id: string): Promise<Category>;
  findAll(): Promise<Category[]>;
}