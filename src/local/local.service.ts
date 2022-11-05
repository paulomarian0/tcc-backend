import { Injectable } from '@nestjs/common';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class LocalService {

  constructor(private prisma: PrismaService) { }

  async create(createLocalDto: any) {

    const payload = await this.prisma.local.create({
      data: {
       ...createLocalDto
    }
    })

    return payload
  }

  async findAll() {
    const payload = await this.prisma.local.findMany();

    return payload;
  }

  findOne(id: number) {
    return `This action returns a #${id} local`;
  }

  update(id: number, updateLocalDto: UpdateLocalDto) {
    return `This action updates a #${id} local`;
  }

  remove(id: number) {
    return `This action removes a #${id} local`;
  }
}
