import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateProdutorDTO } from './dto/create-produtor.dto';
import { UpdateProdutorDTO } from './dto/update-produtor.dto';

@Injectable()
export class ProdutorService {

  constructor(private prisma: PrismaService) { }

  async create(createProdutorDTO: CreateProdutorDTO) {
    const data = {
      ...createProdutorDTO,
    }
    return data
  }

  async findAll() {
    return this.prisma.produtor.findMany(
      // { include: { local: true } }
    );

  }

  async findById(id: number) {
    return await this.prisma.produtor.findUnique({
      where: { id }
    })
  }
 
  async update(id: number, data: UpdateProdutorDTO) {
    return await this.prisma.user.update({
      data,
      where: { id }
    })
  }

  async delete(id: number) {
    return await this.prisma.produtor.delete({
      where: { id }
    })
  }

}
