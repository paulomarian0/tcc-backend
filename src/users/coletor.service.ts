import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateColetorDTO } from './dto/create-coletor.dto';
import { UpdateColetorDTO } from './dto/update-coletor.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class ColetorService {

  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateColetorDTO) {
    const data = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10)
    }

    const createdUser = await this.prisma.coletor.create({data})

    return data
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
