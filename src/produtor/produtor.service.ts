import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ProdutorDTO } from './dto/produtor.dto';

@Injectable()
export class ProdutorService {

  constructor(private prisma: PrismaService) { }

  async create(data: ProdutorDTO) {
    const user = await this.prisma.produtor.create({
      data,
    })
    return user
  }

  async findAll() {
    return this.prisma.produtor.findMany();
  }

  async findById(id: number) {
    return await this.prisma.produtor.findUnique({
      where: { id }
    })
  }

  async findByEmail(email: string) {
    return await this.prisma.produtor.findUnique({
      where: { email }
    })
  }
  async update(id: number, data: ProdutorDTO) {
    return await this.prisma.produtor.update({
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
