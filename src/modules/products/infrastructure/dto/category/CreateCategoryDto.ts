import { Length } from "class-validator"

export class CreateCategoryDto {
  name: string
  @Length(5)
  description: string
  picture: string
}