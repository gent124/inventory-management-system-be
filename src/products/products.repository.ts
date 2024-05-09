// product.repository.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: { ...createProductDto, initialStock: createProductDto.stock },
    });
  }

  async findAll() {
    return this.prisma.product.findMany({
      orderBy: { createdAt: 'asc' },
    });
  }

  async findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id: id },
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }

  async findAllProductsByName(searchTerm: string) {
    return this.prisma.product.findMany({
      where: {
        name: {
          contains: searchTerm,
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
  }

  async deleteMany(ids: number[]) {
    console.log(ids);
    return this.prisma.product.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }

  async getOverviewStats() {
    const stats = await this.prisma.product.findMany({});

    const totalStock = stats.reduce((accumulator, currentProduct) => {
      return accumulator + currentProduct.stock;
    }, 0);

    let productWithHighestStock = stats[0];
    let highestStock = stats[0].stock;

    stats.forEach((product) => {
      if (product.stock > highestStock) {
        highestStock = product.stock;
        productWithHighestStock = product;
      }
    });

    const soldProducts = stats.map((product) => {
      const difference = product.initialStock - product.stock;
      return { ...product, difference };
    });

    soldProducts.sort((a, b) => a.difference - b.difference);

    const mostSoldProduct = soldProducts[soldProducts.length - 1];
    const leastSoldProduct = soldProducts[0];

    return {
      total: totalStock,
      mostLeftStock: productWithHighestStock.name,
      mostSoldProduct: mostSoldProduct,
      leastSoldProduct: leastSoldProduct,
    };
  }
}
