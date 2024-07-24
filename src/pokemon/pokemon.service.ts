import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { isValidObjectId, Model } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Injectable()
export class PokemonService {

  constructor(
    @InjectModel(Pokemon.name) private pokemonRepository: Model<Pokemon>
  ) { }

  async create(createPokemonDto: CreatePokemonDto) {
    try {
      const pokemon = await this.pokemonRepository.create(createPokemonDto)
      return pokemon
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException('Pokemon exists in DB')
      }
    }
  }

  findAll() { return this.pokemonRepository.find() }

  async findOne(id: string) {
    if (isValidObjectId(id)) {
      const pokemon = await this.pokemonRepository.findById(id)
      if (!pokemon) throw new NotFoundException(`Pokemon with ID: ${id} not found`)
      return pokemon
    }
    throw new BadRequestException('Invalid Mongo Id')
  }

  async update(id: string, updatePokemonDto: UpdatePokemonDto) {
    try {
      const updatedPokemon = await this.pokemonRepository.findByIdAndUpdate(id, updatePokemonDto)
      return {
        ...updatedPokemon.toJSON(),
        ...updatePokemonDto
      }
    } catch (error) {
      if (error.code === 11000) {
        const [[key, value]] = Object.entries(error.keyValue);
        throw new BadRequestException(`Pokemon with ${key}=${value} already exists`)
      }
      throw new InternalServerErrorException('Cant update pokemon - Check server logs')
    }
  }

  async remove(id: string) {
    if (isValidObjectId(id)) return await this.pokemonRepository.findByIdAndDelete(id)
    throw new BadRequestException('Invalid Mongo Id')
  }
}