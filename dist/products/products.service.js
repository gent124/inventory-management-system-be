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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products_repository_1 = require("./products.repository");
let ProductsService = class ProductsService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async create(createProductDto) {
        return this.productRepository.create(createProductDto);
    }
    async findAll() {
        return this.productRepository.findAll();
    }
    async findOne(id) {
        const product = await this.productRepository.findOne(id);
        if (!product) {
            throw new common_1.NotFoundException(`Product with id ${id} not found`);
        }
        return product;
    }
    async update(id, updateProductDto) {
        const product = await this.productRepository.findOne(id);
        if (!product) {
            throw new common_1.NotFoundException(`Product with id ${id} not found`);
        }
        return this.productRepository.update(id, updateProductDto);
    }
    async remove(id) {
        const product = await this.productRepository.findOne(id);
        if (!product) {
            throw new common_1.NotFoundException(`Product with id ${id} not found`);
        }
        return this.productRepository.remove(id);
    }
    async searchProductsByName(searchTerm) {
        return await this.productRepository.findAllProductsByName(searchTerm);
    }
    async updateProductStock(productId, increment) {
        const product = await this.productRepository.findOne(productId);
        if (!product) {
            throw new common_1.NotFoundException();
        }
        if (increment) {
            product.stock++;
            return await this.productRepository.update(productId, product);
        }
        product.stock--;
        return await this.productRepository.update(productId, product);
    }
    async deleteMany(ids) {
        return await this.productRepository.deleteMany(ids);
    }
    async getOverviewStats() {
        return await this.productRepository.getOverviewStats();
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [products_repository_1.ProductRepository])
], ProductsService);
//# sourceMappingURL=products.service.js.map