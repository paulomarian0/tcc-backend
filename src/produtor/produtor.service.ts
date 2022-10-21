import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateProdutorDTO } from './dto/create-produtor.dto';
import { UpdateProdutorDTO } from './dto/update-produtor.dto';

@Injectable()
export class ProdutorService {

  constructor(private prisma: PrismaService) { }

  async create(data: CreateProdutorDTO) {
    const { corrida, local, ...produtor } = data
    console.log("aaaaaaaaaaaa", corrida, "local", local)
    console.log(produtor)
    const user = await this.prisma.produtor.create({
      data: {
        ...produtor,
        local: {
          create: {
            ...local
          }
        },
        
        
      },
      
      

      include: { local: true }


    })
    return user
  }

  async findAll() {
    return this.prisma.produtor.findMany(
      { include: { local: true } }
    );

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
  async update(id: number, data: UpdateProdutorDTO) {
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
