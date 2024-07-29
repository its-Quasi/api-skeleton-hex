import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema()
export class CategoryEntity extends Document {
  @Prop({
    unique: true,
    required: true
  })
  name: string

  @Prop()
  description: string
  @Prop()
  picture: string
}

export const CategorySchema = SchemaFactory.createForClass(CategoryEntity)