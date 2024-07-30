import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category } from "src/core/domain/models";
import { CategoryRepository } from "src/core/domain/ports/outbound";
import { CategoryEntity } from "src/infrastructure/entities/CategoryEntity";

@Injectable()
export class CategoryMongoRepositoryAdapter implements CategoryRepository {

  constructor(
    @InjectModel(CategoryEntity.name) private categoryModel: Model<CategoryEntity>
  ) { }

  async findById(id: string): Promise<Category> {
    const category = await this.categoryModel.findOne({ _id: id })
    return category.toJSON()
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryModel.find()
  }

}