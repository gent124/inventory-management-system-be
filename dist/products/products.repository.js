"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/services/prisma.service");
let ProductRepository = class ProductRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProductDto) {
        return this.prisma.product.create({
            data: { ...createProductDto, initialStock: createProductDto.stock },
        });
    }
    async findAll() {
        return this.prisma.product.findMany({
            orderBy: { createdAt: 'asc' },
        });
    }
    async findOne(id) {
        return this.prisma.product.findUnique({
            where: { id: id },
        });
    }
    async update(id, updateProductDto) {
        return this.prisma.product.update({
            where: { id },
            data: updateProductDto,
        });
    }
    async remove(id) {
        return this.prisma.product.delete({
            where: { id },
        });
    }
    async findAllProductsByName(searchTerm) {
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
    async deleteMany(ids) {
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
};
exports.ProductRepository = ProductRepository;
exports.ProductRepository = ProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductRepository);
//# sourceMappingURL=products.repository.js.map