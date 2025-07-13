import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved users' })
  findAll() {
    // Return all users (mock)
    return [{ id: 1, name: 'John Doe' }];
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved user' })
  @ApiResponse({ status: 404, description: 'User not found' })
  findOne(@Param('id') id: string) {
    // Return a single user by id (mock)
    return { id, name: 'John Doe' };
  }

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({
    description: 'User data',
    examples: {
      example1: {
        value: {
          name: 'John Doe',
          email: 'john@example.com',
        },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'User created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createUserDto: any) {
    // Create a new user (mock)
    return { id: 2, ...createUserDto };
  }
}