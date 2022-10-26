import { Injectable, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class UserService {
  
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDTO) {

    

    const {produtor, coletor , ...user} = createUserDto


    const data = {
      ...user,
      password: await bcrypt.hash(user.password, 10),
      
      coletor: {create: {...coletor }} || undefined,
      produtor: {create: {...produtor}} || undefined
    }

    if(coletor==undefined || produtor==undefined){
      console.log("vai dar merda")

      coletor: {{create: {undefined}}}
      
    }

    const createdUser = await this.prisma.user.create({data})

    return createdUser
  }

  @UseGuards(LocalAuthGuard)
  async findAll() {
    return this.prisma.user.findMany();
  }

  async findById(id: number) {
    return await this.prisma.user.findUnique({
      where: { id }
    })
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email }
    })
  }
  async update(id: number, data: UpdateUserDTO) {
    return await this.prisma.user.update({
      data,
      where: { id }
    })
  }

  async delete(id: number) {
    return await this.prisma.user.delete({
      where: { id }
    })
  }

}
