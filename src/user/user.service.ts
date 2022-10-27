import { Injectable, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDTO) {

    const { produtor, coletor, ...user } = createUserDto

    const data = {
      ...user,
      password: await bcrypt.hash(user.password, 10),

      coletor: coletor && { create: { ...coletor } },
      produtor: produtor && { create: { ...produtor } }
    }

    const payload = await this.prisma.user.create(
      { data, include: { coletor: true, produtor: true } }
    )

    return payload;
  }

  @UseGuards(LocalAuthGuard)
  async findAll() {
    return this.prisma.user.findMany(
      { include: { coletor: true, produtor: true } }
    );
  }

  async findById(id: number) {
    return await this.prisma.user.findUnique({
      where: { id },
      include: { coletor: true, produtor: true }

    })
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
      include: { coletor: true, produtor: true }
    })
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
      include: { coletor: true, produtor: true }
    })

    return payload;
  }

  async delete(id: number) {
    return await this.prisma.user.delete({
      where: { id },
      include: { coletor: true, produtor: true }
    })
  }

}
