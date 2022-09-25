import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UserDTO } from './user.dto';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) { }

  async create(data: UserDTO) {
    const user = await this.prisma.user.create({
      data,
    })
    return user
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findById(id: string){
    return await this.prisma.user.findUnique({
      where:{
        id,
      }
    })
  }

  async update(id: string, data: UserDTO) {
    return await this.prisma.user.update({
      data,
      where: {
        id,
      }
    })
  }

  async delete(id: string){
    return await this.prisma.user.delete({
      where:{
        id,
      }
    })
  }

}
