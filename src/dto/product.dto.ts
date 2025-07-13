import { MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty({
    description: 'Category ID of the product',
    example: 1,
    required: false,
  })
  categoryID?: number;

  @ApiProperty({
    description: 'Name of the product',
    example: 'Wireless Keyboard',
    minLength: 5,
  })
  @MinLength(5, { message: 'Product name must be at least 5 character long' })
  productName?: string;

  @ApiProperty({
    description: 'Price of the product',
    example: 8000,
    required: false,
  })
  price?: number;
}