import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from './products.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto);
  }

  async findAll() {
    return this.productRepository.findAll();
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return this.productRepository.update(id, updateProductDto);
  }

  async remove(id: number) {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return this.productRepository.remove(id);
  }

  async searchProductsByName(searchTerm: string) {
    return await this.productRepository.findAllProductsByName(searchTerm);
  }

  async updateProductStock(productId: number, increment: boolean) {
    const product = await this.productRepository.findOne(productId);

    if (!product) {
      throw new NotFoundException();
    }

    if (increment) {
      product.stock++;
      return await this.productRepository.update(productId, product);
    }

    product.stock--;
    return await this.productRepository.update(productId, product);
  }

  async deleteMany(ids: number[]) {
    return await this.productRepository.deleteMany(ids);
  }

  async getOverviewStats() {
    return await this.productRepository.getOverviewStats();
  }
}
