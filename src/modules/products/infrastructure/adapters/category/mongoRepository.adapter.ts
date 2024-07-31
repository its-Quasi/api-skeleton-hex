import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category } from "src/modules/products/core/domain/models";
import { CategoryRepository } from "src/modules/products/core/domain/ports/outbound";
import { CategoryEntity } from "src/modules/products/infrastructure/entities/CategoryEntity";

@Injectable()
export class CategoryMongoRepositoryAdapter implements CategoryRepository {

  constructor(
    @InjectModel(CategoryEntity.name) private categoryModel: Model<CategoryEntity>
  ) { }

  async save(category: Category): Promise<Category> {
    const created = new this.categoryModel(category)
    return (await created.save()).toJSON()
  }

  async findById(id: string): Promise<Category> {
    const category = await this.categoryModel.findOne({ _id: id })
    return category.toJSON()
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryModel.find()
  }

}