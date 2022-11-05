import { Controller, Get, Post, Body, Param, Delete, Put, Query, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { FetchAllteUserDTO } from './dto/fetch-all-user.dto';
import { UserMapper } from './mappers/user-mapper';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @IsPublic()
  @Post()
  async create(@Body() data: CreateUserDTO) {
    const payload = this.userService.create(data)
    return payload;
  }

  @IsPublic()
  @Get()
  async findAll(@Query() filters: FetchAllteUserDTO) {
    const payload = this.userService.findAll(filters)

    return payload;
  }

  @Get(":id")
  async findById(@Query("id") id: string) {
    return this.userService.findById(+id)
  }

  @Post("/login")
  async findByEmail(@Body() data: any) {
    return this.userService.findByEmail(data)
  }

  @Put(":id")
  async update(@Query("id") id: string, @Body() data: UpdateUserDTO) {


    const payload = await this.userService.update(+id, data)

    return UserMapper.fromDatabase(payload);

  }

  @Delete(":id")
  async remove(@Query('id') id: string) {
    return this.userService.delete(+id)
  }
}
