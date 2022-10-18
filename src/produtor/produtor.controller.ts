import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ProdutorDTO } from './dto/produtor.dto';
import { ProdutorService } from './produtor.service';

@Controller('produtor')
export class ProdutorController {
  constructor(private readonly produtorService: ProdutorService) { }

  @Post()
  async create(@Body() data: ProdutorDTO) {
    return this.produtorService.create(data)
  }

  @Get()
  async findAll(){
    return this.produtorService.findAll()
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    return this.produtorService.findById(+id)
  }

  @Get(":email/find")
  async findByEmail(@Param("email") email: string) {
    return this.produtorService.findByEmail(email)
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: ProdutorDTO) {
    return this.produtorService.update(+id, data)
  }

  @Delete(":id")
  async remove(@Param('id') id: string) {
    return this.produtorService.delete(+id)
  }
}