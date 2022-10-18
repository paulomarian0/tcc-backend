import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ColetorDTO } from './dto/coletor.dto';
import { ColetorService } from './coletor.service';

@Controller('coletor')
export class ColetorController {
  constructor(private readonly coletorService: ColetorService) { }

  @Post()
  async create(@Body() data: ColetorDTO) {
    return this.coletorService.create(data)
  }

  @Get()
  async findAll(){
    return this.coletorService.findAll()
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    return this.coletorService.findById(+id)
  }

  @Get(":email/find")
  async findByEmail(@Param("email") email: string) {
    return this.coletorService.findByEmail(email)
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: ColetorDTO) {
    return this.coletorService.update(+id, data)
  }

  @Delete(":id")
  async remove(@Param('id') id: string) {
    return this.coletorService.delete(+id)
  }
}