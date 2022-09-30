import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ColetorDTO } from './coletor.dto';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) { }

  async create(data: ColetorDTO) {
    const user = await this.prisma.coletor.create({
      data,
    })
    return user
  }

  async findAll() {
    return this.prisma.coletor.findMany();
  }

  async findById(id: number) {
    return await this.prisma.coletor.findUnique({
      where: { id }
    })
  }

  async findByEmail(email: string) {
    return await this.prisma.coletor.findUnique({
      where: { email }
    })
  }
  async update(id: number, data: ColetorDTO) {
    return await this.prisma.coletor.update({
      data,
      where: { id }
    })
  }

  async delete(id: number) {
    return await this.prisma.coletor.delete({
      where: { id }
    })
  }

}
