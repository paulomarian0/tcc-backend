import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post()
  async create(@Body() data: CreateUserDTO) {
    return this.userService.create(
      data
      )
  }

  @Get()
  async findAll(){
    return this.userService.findAll()
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    return this.userService.findById(+id)
  }

  @Get(":email/find")
  async findByEmail(@Param("email") email: string) {
    return this.userService.findByEmail(email)
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: UpdateUserDTO) {
    return this.userService.update(+id, data)
  }

  @Delete(":id")
  async remove(@Param('id') id: string) {
    return this.userService.delete(+id)
  }
}
