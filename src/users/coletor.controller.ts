import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ColetorDTO } from './coletor.dto';
import { UsersService } from './coletor.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() data: ColetorDTO) {
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

  @Get(":email/find")
  async findByEmail(@Param("email") email: string) {
    return this.usersService.findByEmail(email)
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: ColetorDTO) {
    return this.usersService.update(+id, data)
  }

  @Delete(":id")
  async remove(@Param('id') id: string) {
    return this.usersService.delete(+id)
  }
}
