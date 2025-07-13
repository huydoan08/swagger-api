import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { Product } from 'src/models/product.model';
import { ProductDto } from 'src/dto/product.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('products') // Gắn tag cho Swagger
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved products' })
  getProduct(): ResponseData<Product[]> {
    try {
      return new ResponseData<Product[]>(
        this.productService.getProduct(),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch {
      return new ResponseData<Product[]>(
        this.productService.getProduct(),
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  @ApiBody({ type: ProductDto })
  @ApiResponse({ status: 201, description: 'Product created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  createProduct(@Body() productDto: ProductDto): ResponseData<ProductDto> {
    try {
      return new ResponseData<ProductDto>(
        this.productService.createProduct(productDto),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch {
      return new ResponseData<ProductDto>(
        productDto,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product by ID' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved product' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  getDetailProduct(@Param('id') id: string): ResponseData<Product | null> {
    try {
      const product = this.productService.getDetailProduct(Number(id));
      return new ResponseData<Product | null>(
        product || null,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch {
      return new ResponseData<Product | null>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update product by ID' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiResponse({ status: 200, description: 'Product updated successfully' })
  updateProduct(): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.productService.updateProduct(),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch {
      return new ResponseData<string>(
        'Update failed',
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete product by ID' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiResponse({ status: 200, description: 'Product deleted successfully' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  deleteProduct(@Param('id') id: string): ResponseData<any> {
    try {
      const result = this.productService.deleteProduct(Number(id));
      return new ResponseData<any>(
        result,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch {
      return new ResponseData<any>(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }
}
