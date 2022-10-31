import { Injectable, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/database/PrismaService';
import { UserMapper } from './mappers/user-mapper';
import { FetchAllteUserDTO } from './dto/fetch-all-user.dto';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDTO) {
    const dataMapped = await UserMapper.createToDatabase(createUserDto)
    const { produtor, coletor, ...user } = dataMapped

    const payload = await this.prisma.user.create({
      data: {
        ...user,

        produtor: produtor && {
          create: {
              ...produtor
          /*   local: produtor.local && {
               create: {
                ...produtor.local
              }
            } */
          }
        },

        coletor: coletor && {
          create: {
            ...coletor
          }
        }
      },

      // include: { coletor: true, produtor: { include: { local: true } } }
      include: { coletor: true, produtor: true }

    })

    return UserMapper.fromDatabase(payload)
  }

  @UseGuards(LocalAuthGuard)
  async findAll(filters: FetchAllteUserDTO) {

    const payload = await this.prisma.user.findMany(

      {
        where: { name: { contains: filters.name }, email: { contains: filters.email } },
        include: { coletor: true, produtor: { include: { local: true } } }
      }
    );

    return payload.map(UserMapper.fromDatabase);
  }

  async findById(id: number) {

    const payload = await this.prisma.user.findUnique({
      where: { id },
      include: { coletor: true, produtor: { include: { local: true } } }
    })

    return UserMapper.fromDatabase(payload)
  }

  async findByEmail(email: string) {
    const payload = await this.prisma.user.findUnique({
      where: { email },
      include: { coletor: true, produtor: { include: { local: true } } }
    })

    return payload
  }

  async update(id: number, updateUserDTO: UpdateUserDTO) {

    const { produtor, coletor, ...user } = updateUserDTO
    const data = {
      ...user,
      password: await bcrypt.hash(user.password, 10),
      coletor: coletor && { create: { ...coletor } },
      produtor: produtor && { create: { ...produtor } }
    }

    const payload = this.prisma.user.update({
      data,
      where: { id },
      include: { coletor: true, produtor: { include: { local: true } } }
    })

    return payload;
  }

  async delete(id: number) {
    const payload = await this.prisma.user.delete({
      where: { id },
      include: { coletor: true, produtor: { include: { local: true } } }
    })
    return payload;
  }
}
