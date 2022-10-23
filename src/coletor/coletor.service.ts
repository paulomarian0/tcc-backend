import { Injectable, UseGuards } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateColetorDTO } from './dto/create-coletor.dto';
import { UpdateColetorDTO } from './dto/update-coletor.dto';
import * as bcrypt from 'bcrypt'
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';

@Injectable()
export class ColetorService {

  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateColetorDTO) {
    const data = {
      ...createUserDto,
    }


    return data
  }

  @UseGuards(LocalAuthGuard)
  async findAll() {
    return this.prisma.coletor.findMany();
  }

  async findById(id: number) {
    return await this.prisma.coletor.findUnique({
      where: { id }
    })
  }

  async update(id: number, data: UpdateColetorDTO) {
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
