import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() data: UserDTO) {
    return this.usersService.create(data)
  }

  @Get()
  async findAll() {
    return this.usersService.findAll()
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    return this.usersService.findById(+id)
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: UserDTO) {
    return this.usersService.update(+id, data)
  }

  @Delete(":id")
  async remove(@Param('id') id: string) {
    return this.usersService.delete(+id)
  }
}
