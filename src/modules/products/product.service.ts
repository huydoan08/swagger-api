import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductService {
    private product: Product[] = [
        { id: 1, categoryID: 2, price: 8000, productName: 'Keyboard' },
        { id: 2, categoryID: 2, price: 9000, productName: 'Keyboard' },
        { id: 3, categoryID: 2, price: 10000, productName: 'Keyboard' },
    ];

    getProduct(): Product[] {
        return this.product;
    }

    createProduct(data: any): Product {
        const newProduct = new Product(data);
        this.product.push(newProduct);
        return newProduct;
    }

    getDetailProduct(id: number): Product | undefined {
        return this.product.find((it) => it.id === Number(id));
    }

    updateProduct(): string {
        return 'Update LIST PRODUCT';
    }

    deleteProduct(id: number) {
        const index = this.product.findIndex((p) => p.id === id);
        if (index === -1) {
            throw new NotFoundException('Product not found');
        }

        const deleted = this.product.splice(index, 1); // Xoá phần tử
        return {
            message: 'Product deleted successfully',
            deleted: deleted[0],
        };
    }
}